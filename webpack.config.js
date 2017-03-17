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
        // Use babel against all project js files
        loader:  'babel-loader',
        test:    /(\.js)$/,
        exclude: /node_modules/,

        // Support the last 5 browser versions
        options: {
          presets: [['env', {
            targets: {
              node: 'current',
              browsers: 'last 5 versions'
            }
          }]]
        }
      }
    ]
  },


  plugins: [
    // Uglify Builds
    new webpack.optimize.UglifyJsPlugin(),

    // Don't build when compilation fails
    new webpack.NoEmitOnErrorsPlugin()
  ]

};


module.exports = config;

