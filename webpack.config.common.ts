import * as path from 'path';
import * as webpack from 'webpack';
import { ProgressPlugin } from 'webpack';

import { AngularCompilerPlugin } from '@ngtools/webpack';
import { PurifyPlugin } from '@angular-devkit/build-optimizer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import * as CircularDependencyPlugin from 'circular-dependency-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

import * as postcssImport from 'postcss-import';
import * as postcssNesting from 'postcss-nesting';
import * as postcssCssVariables from 'postcss-css-variables';
import * as postcssColorFunction from 'postcss-color-function';
import * as postcssNext from 'postcss-cssnext';
import * as rucksackCss from 'rucksack-css';
import * as cssnano from 'cssnano';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const root = (__path = '.') => path.join(__dirname, __path);

const POST_CSS_PLUGINS_COMMON = [
  postcssImport(),
  postcssNesting(),
  postcssCssVariables(),
  postcssColorFunction(),
  postcssNext(),
  rucksackCss(),
];

const POST_CSS_PLUGINS_CSSNANO = [
  ...POST_CSS_PLUGINS_COMMON,
  cssnano({
    autoprefixer: false,
    safe: true,
    mergeLonghand: false,
    discardComments: {
      remove: (comment) => !(/@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i.test(comment))
    }
  })
];

const CSS_LOADER_ALIAS = {
  '../fonts': '../public/fonts',
  '../imgs': '../public/imgs'
};

export interface Config {
  appFolder: string;
  outputFolder: string;
  aot: boolean;
  extractCSS: boolean;
  minify: boolean;
  replaceEnvFile: false | string;
}

export default function(config: Config): webpack.Configuration {

  const POSTCSS_PLUGINS = config.minify ? POST_CSS_PLUGINS_CSSNANO : POST_CSS_PLUGINS_COMMON;

  const APP_FOLDER = root(config.appFolder);
  const OUTPUT_FOLDER = root(config.outputFolder);
  const ASSETS_FOLDER = APP_FOLDER + '/public';

  return {
    entry: {
      main: APP_FOLDER + '/main.ts',
      polyfills: APP_FOLDER + '/polyfills.ts',
      styles: APP_FOLDER + '/styles/index.styl'
    },
    output: {
      path: OUTPUT_FOLDER,
      publicPath: '',
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
    },
    module: {
      rules: [
        config.aot ? {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: [
            {
              loader: '@angular-devkit/build-optimizer/webpack-loader',
              options: {
                sourceMap: false
              }
            },
            '@ngtools/webpack'
          ]
        } : {
          test: /\.ts?$/,
          use: [
            {
              loader: '@ngtools/webpack',
            }
          ]
        },
        // The component styl files are stringified to work with the ngc loader
        {
          test: /\.styl$/,
          exclude: [root(config.appFolder + '/styles')],
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                parser: 'sugarss',
                plugins: POSTCSS_PLUGINS,
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: [root(config.appFolder + '/styles')],
          use: [
            'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 1,
              }
            }
          ]
        },
        {
          exclude: [root(config.appFolder + '/index.html')],
          test: /\.(html)$/,
          use: ['raw-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.styl$/,
          include: [root(config.appFolder + '/styles')],
          use: [
            config.extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  alias: CSS_LOADER_ALIAS,
                  minimize: config.minify
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  parser: 'sugarss',
                  plugins: POSTCSS_PLUGINS,
                  sourceMap: false
                }
              }
            ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new AngularCompilerPlugin({
        tsConfigPath: root('tsconfig.json'),
        entryModule: root(config.appFolder + '/src/app.module#AppModule'),
        skipCodeGeneration: !config.aot,
        hostReplacementPaths: config.replaceEnvFile ? {
          [config.appFolder + '/environment/environment.ts']: `${config.appFolder}/environment/environment.${config.replaceEnvFile}.ts`
        } : {},
      }),
      CopyWebpackPlugin([{
        from: ASSETS_FOLDER,
        to: ''
      }]),
      new ProgressPlugin(),
      new CircularDependencyPlugin({
        exclude: /(\\|\/)node_modules(\\|\/)/,
        failOnError: false
      }),
      new HtmlWebpackPlugin({
        template: APP_FOLDER + '/index.html',
        minify: config.minify ? {
          caseSensitive: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        } : false,
        chunksSortMode: (left, right) => {
          const entryPoints = ['polyfills', 'styles', 'main'];
          const leftIndex = entryPoints.indexOf(left.names[0]);
          const rightindex = entryPoints.indexOf(right.names[0]);
          if (leftIndex > rightindex) {
            return 1;
          } else if (leftIndex < rightindex) {
            return -1;
          } else {
            return 0;
          }
        },
      }),
      config.aot ? new PurifyPlugin() : null,
    ].filter(p => !!p),
  };
}
