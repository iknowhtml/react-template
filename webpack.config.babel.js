import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';

// Two parameters are passed in at bundle time, env & argv. argv contains all flags passed into webpack, including mode.
const webpackConfiguration = (env, argv) => ({
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[hash].js',
  },
  // Configures Loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  // Configures Plugins
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      hash: process.env.NODE_ENV === 'production',
      //Prevents automatic injection of CSS & HTML into template.
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  // Configures Optimizations
  optimization: {
    minimizer:
      process.env.NODE_ENV === 'production'
        ? [new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
        : [],
    splitChunks: {
      chunks: 'all',
    },
  },
  //Configures Webpack DevServer
  devServer: {
    port: 8080,
    // Enables webpack's Hot Module Replacement feature.
    hot: true,
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default.
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});

export default webpackConfiguration;
