const path = require('path');

module.exports = {
  target: 'node',
  entry: ['/client/app/maker.js', '/client/helper/helper.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'hosted'),
  },
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
              /tinymce/,
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