const path = require('path');
const HWP = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  entry: ['/client/app/maker.js', '/client/helper/helper.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'hosted'),
  },
  plugins:[
    new HWP(
      {template: path.join(__dirname, './views/app.handlebars')}
    )
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
}