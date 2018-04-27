import * as path from 'path';
import * as merge from 'webpack-merge';
import * as history from 'connect-history-api-fallback';
import * as convert from 'koa-connect';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import wpc from './webpack.config.common';

const root = (__path = '.') => path.join(__dirname, __path);


const config = wpc({
  appFolder: 'demo',
  outputFolder: 'docs',
  minify: false,
  extractCSS: false,
  replaceEnvFile: false,
  aot: false,
});

module.exports = merge(config, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    alias: {
      'plotly.js': 'node_modules/plotly.js/dist/plotly.js' // Plotly.js fix
    },
  },
});

module.exports.serve = {
  port: 3000,
  add: (app, middleware, options) => app.use(convert(history({})))
};
