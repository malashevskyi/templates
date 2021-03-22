const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === 'development';

// minimize css, js in production
const optimization = () => {
  const config = {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: !isDev ? [new TerserPlugin(), new CssMinimizerPlugin()] : [],
  };

  return config;
};

// loaders for css/scss/sass
const cssLoaders = () => [
  {
    loader: MiniCssExtractPlugin.loader,
    options: { publicPath: '' },
  },
  'css-loader',
  'postcss-loader',
  'sass-loader',
];

// loaders for fonts/images/other files
const fileLoaders = (dist) => {
  const config = [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]',
        outputPath: `${dist}/`,
      },
    },
  ];

  return config;
};

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = [
  // load html
  new HTMLWebpackPlugin({
    template: './index.html',
    minify: {
      collapseWhitespace: !isDev,
    },
  }),
  // clean prev files in dist
  new CleanWebpackPlugin(),

  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.join(__dirname, 'src/assets/favicon'),
        to: path.join(__dirname, 'dist/favicon'),
      },
    ],
  }),
  new MiniCssExtractPlugin({
    filename: filename('css'),
  }),
];

if (isDev) {
  plugins.push(new ReactRefreshWebpackPlugin());
} else {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  context: path.join(__dirname, 'src'),
  /**
   * add browserslist only for production
   * if production - Infer a platform and the ES-features from a browserslist-config
   * if development - Compile for usage in a browser-like environment
   * */
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',
  mode: process.env.NODE_ENV,
  entry: {
    // chunks
    main: './index.js',
  },
  output: {
    filename: filename('js'),
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
    alias: {
      '@styles': path.join(__dirname, 'src/assets/styles'),
      '@js': path.join(__dirname, 'src/assets/js'),
      '@components': path.join(__dirname, 'src/components'),
      '@images': path.join(__dirname, 'src/assets/images'),
      '@fonts': path.join(__dirname, 'src/assets/fonts'),
    },
  },
  devtool: isDev ? 'source-map' : false,
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev,
    contentBase: './dist',
    open: false,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx)$/,
        exclude: /node_modules/,
        use: isDev ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: cssLoaders(),
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)/,
        use: fileLoaders('images'),
      },
      {
        test: /\.(woff|woff2)/,
        use: fileLoaders('fonts'),
      },
    ],
  },
};
