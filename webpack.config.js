const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  return {
      mode: 'production',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'static',
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
          inject: false,
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: 'public/favicon.ico', to: 'favicon.ico' },
          ],
        }),
      ],
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: {
          app: {
            name: 'chrome',
            arguments: ['--incognito', '--new-window'],
          },
          target: ['/index.html'],
        },
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
   };
};
