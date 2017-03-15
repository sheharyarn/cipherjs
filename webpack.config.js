const webpack   = require('webpack');
const path      = require('path');

const dir_src   = path.resolve(__dirname, 'src');
const dir_build = path.resolve(__dirname, 'dist');

const output    = 'cipherjs';


const config = {

  // Source JS file
  entry: path.resolve(dir_src, 'index.js'),


  // Build Destination File
  output: {
    path:     dir_build,
    filename: output + '.js'
  },


  // Module Loaders
  module: {
    loaders: [
      {
        loader:  'babel-loader',
        test:    /(\.js)$/,
        exclude: /node_modules/
      }
    ]
  }

};


module.exports = config;

