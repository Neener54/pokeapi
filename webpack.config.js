// Webpack config file
let path = require('path')
module.exports = {
  entry: './assets/js/components/Index.jsx',
  output: {
    path: path.join(__dirname, '/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
}
