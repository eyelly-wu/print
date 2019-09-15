const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'print',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                'targets': {
                  'esmodules': false
                },
                'modules': 'umd'
              }],
            '@babel/preset-typescript'
          ],
          plugins: ["add-module-exports"]
        }
      }
    ]
  }
}
