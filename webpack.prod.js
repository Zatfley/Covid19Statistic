// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  mode: 'production',
  module: {
    rules: [
      /* babel loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
