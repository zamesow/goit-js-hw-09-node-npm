const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'my-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },  {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }],
    },
    devServer: {
        open: true,
        port: 4444,
        clientLogLevel: 'error',
    },
}