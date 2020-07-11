/**
 * TODO
 *
 * - data
 * - use gulp-twing for markup
 * - fonts
 * - gh-pages
 * - production + webpackProduction
 *   - replaceFiles?
 *   - prebuild, postbuild
 *   - static
 *   - size-report
 * - static
 * - is webpack working??
 * - webpack setup from fedpack?
 * - script to
 *   - copy files to root .tool-versions, .babel.config.json, gulpfile.babel.js, webpack.js
 *   - copy files to root package-lock.json or yarn.lock depending on what command was used
 *   - add the node dependencies
 */

/**
 * A Gulp setup for static site building.
 * Handles images, markup (HTML), scripts, and styles ((Post)CSS, LESS, Sass).
 * File structure is completely up to you.
 * Supports bundling of select stylesheets.
 *
 * Basic setup: configure
 * - PostCSS
 * - Config
 *
 * Advanced setup: configure
 * - Webpack (in `./webpack.js`)
 *
 * To log debugging messages, set the env variable DEBUG to something Node-truthy
 * (e.g. `$ DEBUG=true gulp`)
 *
 */

/**
 * Dependencies
 */

import browserSync from 'browser-sync'
import {
  dest, // used by all tasks
  lastRun, // used by images, scripts, styles, and views tasks
  parallel, // used by build task
  series, // used by watches, build, and dev tasks
  src, // used by all tasks
  watch // used by watches task
} from 'gulp'
import babel from 'gulp-babel' // used by scripts task
import del from 'del' // used by clean task
import uglify from 'gulp-uglify' // used by scripts task
import webpack from 'webpack' // used by scripts task
import webpackDevMiddleware from 'webpack-dev-middleware' // used by serve task
import webpackHotMiddleware from 'webpack-hot-middleware' // used by serve task

const concat = require('gulp-concat') // used by stylesBundle task
const debug = require('gulp-debug') // used by all tasks
const filter = require('gulp-filter') // used by styles task and stylesBundle task
const less = require('gulp-less') // used by styles task and stylesBundle task
const plumber = require('gulp-plumber') // used by all tasks
const postcss = require('gulp-postcss') // used by styles task and stylesBundle task
const rename = require('gulp-rename') // used by views task
const sass = require('gulp-sass') // used by styles task and stylesBundle task
const svgstore = require('gulp-svgstore') // used by styles task and stylesBundle task
const twig = require('gulp-twig') // used by views task

import { config as webpackConfig } from './webpack'

const bundler = webpack(webpackConfig)
const debugging = process.env.DEBUG || false
const debugOptions = title => {
  /**
   * When `debugging` is enabled (with DEBUG=<something truthy>), `debugOptions`
   * is referenced in each debugging instance.
   * See https://github.com/sindresorhus/gulp-debug#api
   *
   */
  return {
    showFiles: debugging,
    showCount: debugging,
    title: debugging ? title : ''
  }
}
const mode = process.env.NODE_ENV || 'development'
const server = browserSync //.create()

/**
 * PostCSS
 */

const postCssPlugins = [
  /**
   * Add PostCSS plugins here, e.g.
   *
   * require('tailwindcss')('./tailwind.config.js')
   *
   */
  // require('postcss-easy-import'),
  require('postcss-csso')({comments: false})
]

/**
 * Config
 */

const destinationDir = 'dist'
const sourceDir = 'src'
const taskConfig = {
  /**
   * Each task's config has a srcGlobs parameter and optional srcOptions parameter
   * which are passed to the task's `gulp.src`
   * (see https://gulpjs.com/docs/en/api/src)
   *
   * and a destDirectory parameter and optional destOptions parameter
   * which are passed to the task's `gulp.dest`
   * (see https://gulpjs.com/docs/en/api/dest)
   *
   */
  images: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.{gif,jpg,png,svg}`,
      `!${sourceDir}/**/_*/**/*.{gif,jpg,png,svg}`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.{gif,jpg,png,svg}` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      since: lastRun(images)
    },
  },
  scripts: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.js`,
      `!${sourceDir}/**/_*/**/*.js`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.js` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      since: lastRun(scripts),
      sourcemaps: mode != 'production'
    },
  },
  stylesBundle: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.bundle.{css,less,scss}`,
      // `!${sourceDir}/**/_*/**/*.bundle.{css,less,scss}`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.bundle.{css,less,scss}` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      sourcemaps: mode != 'production'
    },
    targetFile: 'bundle.css',
  },
  styles: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.{css,less,scss}`,
      `!${sourceDir}/**/*.bundle.{css,less,scss}`, /* ignore files that get bundled */
      `!${sourceDir}/**/_*/**/*.{css,less,scss}`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.{css,less,scss}` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      since: lastRun(styles),
      sourcemaps: mode != 'production'
    },
  },
  svgSprite: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.svg`,
      `!${sourceDir}/**/_*/**/*.svg`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.svg` /* ignore underscore-prefixed files */
    ],
    srcOptions: null,
    svgstore: null,
  },
  views: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.{html,html.twig,twig}`,
      `!${sourceDir}/**/_*/**/*.{html,html.twig,twig}`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.{html,html.twig,twig}` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      // base: `${sourceDir}/views/`,
    }
  }
}

/**
 * Tasks
 */

function images(done) {
  src(taskConfig.images.srcGlobs, taskConfig.images.srcOptions || null )
    .pipe(plumber())
    .pipe(debug(debugOptions('Images:')))
    .pipe(dest(taskConfig.images.destDirectory, taskConfig.images.destOptions || null ))
    .pipe(server.stream())

  done()
}

function reload(done) {
  server.reload()
  done()
}

function scripts(done) {
  src(taskConfig.scripts.srcGlobs, taskConfig.scripts.srcOptions || null )
    .pipe(plumber())
    .pipe(debug(debugOptions('Scripts:')))
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(taskConfig.scripts.destDirectory, taskConfig.scripts.destOptions || null ))

  done()
}

function serve(done) {
  server.init({
    open: false,
    server: {
      baseDir: destinationDir
    },
    middleware: [
      webpackDevMiddleware(bundler, {
        logLevel: 'silent'
      }),
      webpackHotMiddleware(bundler, {
        log: false,
      })
    ],
  })

  done()
}

function styles(done) {
  const lessFilter = filter('**/*.less', {restore: true})
  const sassFilter = filter('**/*.scss', {restore: true})

  src(taskConfig.styles.srcGlobs, taskConfig.styles.srcOptions || null )
    .pipe(plumber())
    .pipe(debug(debugOptions('All non-bundled stylesheets:')))
    // .pipe(dirFilter)
    .pipe(lessFilter)
    .pipe(less())
    .pipe(debug(debugOptions('LESS non-bundled stylesheets:')))
    .pipe(lessFilter.restore)
    .pipe(sassFilter)
    .pipe(debug(debugOptions('Sass non-bundled stylesheets:')))
    .pipe(sass().on('error', sass.logError))
    .pipe(sassFilter.restore)
    .pipe(postcss(postCssPlugins))
    .pipe(dest(taskConfig.styles.destDirectory, taskConfig.styles.destOptions || null ))
    .pipe(server.stream())

  done()
}

function stylesBundle(done) {
  const bundleLessFilter = filter('**/*.bundle.less', {restore: true})
  const bundleSassFilter = filter('**/*.bundle.scss', {restore: true})

  src(taskConfig.stylesBundle.srcGlobs, taskConfig.stylesBundle.srcOptions || null )
    .pipe(plumber())
    .pipe(debug(debugOptions('All bundled stylesheets:')))
    .pipe(bundleLessFilter)
    .pipe(less())
    .pipe(debug(debugOptions('LESS bundled stylesheets:')))
    .pipe(bundleLessFilter.restore)
    .pipe(bundleSassFilter)
    .pipe(debug(debugOptions('Sass bundled stylesheets:')))
    .pipe(sass())
    .pipe(bundleSassFilter.restore)
    .pipe(postcss(postCssPlugins))
    .pipe(concat(taskConfig.stylesBundle.targetFile))
    .pipe(dest(taskConfig.stylesBundle.destDirectory, taskConfig.stylesBundle.destOptions || null ))
    .pipe(server.stream())

  done()
}

function svgSprite(done) {
  src(taskConfig.svgSprite.srcGlobs, taskConfig.svgSprite.srcOptions || null)
    .pipe(plumber())
    .pipe(debug(debugOptions('svgSprite:')))
    .pipe(svgstore(taskConfig.svgSprite.svgstore || null))
    .pipe(dest(taskConfig.svgSprite.destDirectory, taskConfig.svgSprite.destOptions || null))

  done()
}

function views(done) {
  const twigFilter = filter('**/*.{html.twig,twig}', {restore: true})
  const htmlTwigFilter = filter('**/*.html.twig', {restore: true})

  src(taskConfig.views.srcGlobs)
    .pipe(plumber())
    .pipe(debug(debugOptions('Views:')))
    .pipe(twigFilter)
    .pipe(debug(debugOptions('Twig views:')))
    .pipe(twig({
      base: sourceDir,
    }))
    .pipe(twigFilter.restore)
    .pipe(htmlTwigFilter)
    .pipe(rename({
      extname: '', /* prevent .html.html */
    }))
    .pipe(htmlTwigFilter.restore)
    .pipe(dest('dist'))
    .pipe(dest(taskConfig.views.destDirectory, taskConfig.views.destOptions || null ))

  done()
}

function watches() {
  watch(taskConfig.images.srcGlobs, images)
  watch(taskConfig.scripts.srcGlobs, series(
    scripts,
    reload
  ))
  watch(taskConfig.styles.srcGlobs, styles)
  watch(taskConfig.stylesBundle.srcGlobs, stylesBundle)
  watch(taskConfig.views.srcGlobs, series(
    views,
    reload
  ))
}

/**
 * Composed tasks
 */

const clean = () => del(destinationDir)
const build = series(
  clean,
  parallel(images, scripts, styles, stylesBundle, svgSprite),
  views
)
const dev = series(
  build,
  serve,
  watches
)

/**
 * Logs
 */

if (debugging) {
  console.log(taskConfig)
}

/**
 * Exports
 */

export default dev
export {
  build,
  clean,
  dev,
  images,
  reload,
  scripts,
  serve,
  styles,
  stylesBundle,
  svgSprite,
  views,
  watches,
}
