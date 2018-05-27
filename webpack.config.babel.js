import path from 'path';
import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlBeautifyPlugin from 'html-beautify-webpack-plugin';


const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: [
    './src/javascripts/index.js',
    './src/stylesheets/main.scss',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'javascripts/bundle.js',
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: ['env', 'stage-0']
          }
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              data: {
                hi: 'hi!'
              }
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/stylesheets'),
        exclude: /\/node_modules\//,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: NODE_ENV === 'production',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [
                autoprefixer('cover 99.5%')
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html'
    }),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: false,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ['p', 'i', 'b', 'span']
        }
      },
      replace: [' type="text/javascript"']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images'
      }
    ]),
  ],
  devServer: {
    compress: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    host: 'localhost',
    port: 3000
  },
};

if (NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          sequences: true,
          booleans: true,
          loops: true,
          unused: true,
          warnings: false,
          drop_console: true,
          unsafe: true,
          dead_code: true,
          conditionals: true,
          if_return: true,
          join_vars: true,
        },
        mangle: {
        },
        output: {
          comments: true,
          beautify: true,
        },
        toplevel: true,
        nameCache: null,
        ie8: false,
        keep_classnames: false,
        keep_fnames: false,
        safari10: false,
      }
    })
  );
}

export default config;
