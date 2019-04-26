const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    "main" : "./index.tsx"
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat",
    }
  },

  

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};