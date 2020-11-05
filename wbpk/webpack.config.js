const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'my-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.scss$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
        },  {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
          }],
  },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'}), new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),],
    devServer: {
        open: true,
        port: 4444,
        clientLogLevel: 'error',
    },
}