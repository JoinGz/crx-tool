import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))
const output = resolve(__dirname, '../dist')

export default {
  entry: {
    options: './src/options/index.js',
    popup: './src/popup/index.js',
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: output,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'options.html',
      template: './src/options/index.html',
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: './src/popup/index.html',
      chunks: ['popup'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../src/static/'),
          to: output,
        },
      ],
    }),
  ],
}
