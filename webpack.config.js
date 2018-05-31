const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = (...src) => path.resolve(__dirname, ...src); 

const config = {
  mode: 'development',
  entry: resolve('src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  devServer:{
    contentBase: resolve('dist')
  },
  resolve:{
    alias: {
      '@': resolve('src'),
      'comp': resolve('src', 'components'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  module:{
    rules:[
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader','css-loader'] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.vue$/, 
        loader: 'vue-loader',
        options: {
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
    new CleanWebpackPlugin('dist'),
    new VueLoaderPlugin()
  ]
}

module.exports = config