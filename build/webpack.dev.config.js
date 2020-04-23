/*
 * @Author: PT
 * @Date: 2020-04-23 09:12:40
 * @LastEditors: PT
 * @LastEditTime: 2020-04-23 11:40:49
 * @Description: 
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const markdownConf = require('./markdown.conf.js');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../example/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:7].js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8090,
    hot: true,
    open: false,
    inline: true,
    quiet: false, // 开启会关闭控制台日志
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: markdownConf()
          }
        ],
        
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json', '.md' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      example: path.resolve(__dirname, '../example')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../example/index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ProgressBarWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  optimization: {
    minimize: false
  }
}