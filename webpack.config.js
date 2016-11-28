var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app/src/react');

var config = {
  entry: APP_DIR + '/home.jsx',
  output: {
    path: path.resolve(__dirname, 'app/static/lib/'),
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
