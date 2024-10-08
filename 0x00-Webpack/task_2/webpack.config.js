const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Use your existing index.html as a template
      inject: 'body', // Inject scripts at the end of the body
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better results
        plugins: [
          ['mozjpeg', { quality: 65 }],
          ['pngquant', { quality: [0.65, 0.90] }],
          ['gifsicle', { interlaced: false }],
          ['svgo', {}],
        ],
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 200000,
    maxEntrypointSize: 400000,
  },
  
  mode: 'production'
};
