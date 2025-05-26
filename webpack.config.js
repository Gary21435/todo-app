// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script.js', // adjust if your script.js is somewhere else
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean old files on each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // for CSS files
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource', // for images/icons
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // copy and inject bundle
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
  mode: 'production', // change to 'production' when deploying
};
