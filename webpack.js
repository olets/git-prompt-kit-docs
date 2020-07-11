import path from 'path'
import webpack from 'webpack'

const config = {
  context: path.resolve(__dirname, './src/scripts'),
  entry: {
    main: [
      './app.js',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client'
    ]
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, './dest')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = { config }
