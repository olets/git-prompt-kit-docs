/**
 * A Gulp setup for static site building.
 * Handles markup (HTML), scripts, and LESS styles.
 * File structure is completely up to you.
 * Supports bundling of select stylesheets.
 *
 * Copyright (c) Henry Bley-Vroman, 2020
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
  lastRun, // used by scripts, styles, and views tasks
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

const debug = require('gulp-debug') // used by all tasks
const filter = require('gulp-filter') // used by styles task
const less = require('gulp-less') // used by styles task
const plumber = require('gulp-plumber') // used by all tasks
const postcss = require('gulp-postcss') // used by styles task
const rename = require('gulp-rename') // used by views task
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
const server = browserSync.create()

/**
 * PostCSS
 */

const postCssPlugins = [
  require('postcss-csso')({comments: false}),
  require('postcss-preset-env')()
]

/**
 * Config
 */

const destinationDir = 'dist'
const sourceDir = 'src'
const taskConfig = {
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
  styles: {
    destDirectory: destinationDir,
    destOptions: null,
    srcGlobs: [
      `${sourceDir}/**/*.less`,
      `!${sourceDir}/**/*.bundle.less`, /* ignore files that get bundled */
      `!${sourceDir}/**/_*/**/*.less`, /* ignore files in underscore-prefixed directories */
      `!${sourceDir}/**/_*.less` /* ignore underscore-prefixed files */
    ],
    srcOptions: {
      since: lastRun(styles),
      sourcemaps: mode != 'production'
    },
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
  src(taskConfig.styles.srcGlobs, taskConfig.styles.srcOptions || null )
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss(postCssPlugins))
    .pipe(dest(taskConfig.styles.destDirectory, taskConfig.styles.destOptions || null ))
    .pipe(server.stream())

  done()
}

function views(done) {
  const twigFilter = filter('**/*.{html.twig,twig}', {restore: true})
  const htmlTwigFilter = filter('**/*.html.twig', {restore: true})

  src(taskConfig.views.srcGlobs, taskConfig.styles.srcOptions || null )
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
  parallel(images, scripts, styles),
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
  views,
  watches,
}
