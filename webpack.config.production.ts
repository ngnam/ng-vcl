import * as path from 'path';
import * as merge from 'webpack-merge';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import wpc from './webpack.config.common';

const root = (__path = '.') => path.join(__dirname, __path);

const config = wpc({
  appFolder: 'demo',
  outputFolder: 'docs',
  minify: true,
  extractCSS: true,
  replaceEnvFile: 'prod',
  aot: true,
});

module.exports = merge(config, {
  mode: 'production',
  resolve: {
    plugins: [
      new TsConfigPathsPlugin()
    ],
    alias: {
      'plotly.js': 'node_modules/plotly.js/dist/plotly.js' // Plotly.js fix
    },
  }
});
