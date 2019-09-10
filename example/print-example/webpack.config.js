const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  const isProd = env === 'prod'
  const addedPlugins = isProd
    ? []
    : [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]

  return {
    devServer: {
      compress: true,
      port: 12315,
      open: true,
      overlay: true,
      hot: false
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'eval-source-map',
    entry: {
      main: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [
        {
          test: /.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: ['file-loader']
        }, {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/typescript'
            ]
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'webpack learning',
        template: './src/index.html'
      }),
      ...addedPlugins
    ]
  }
}
