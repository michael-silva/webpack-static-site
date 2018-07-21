const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const pages = [
  new HtmlWebpackPlugin({
    chunks: ['home'],
    template: './src/index.html',
    filename: './index.html'
  }),
  new HtmlWebpackPlugin({
    chunks: ['blog'],
    template: './src/blog.html',
    filename: './blog.html'
  })
];

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    'home': ['./src/assets/js/home.js',  './src/assets/scss/home.scss'],
    'blog': ['./src/assets/js/blog.js', './src/assets/scss/blog.scss']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'assets/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        },
        {
          loader: 'css-loader', // translates CSS into CommonJS modules
        },
        {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [require('precss'), require('autoprefixer')];
            }
          }
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    ...pages,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
};