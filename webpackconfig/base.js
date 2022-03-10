import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))
const output = resolve(__dirname, '../dist')

export default {
  entry: {
    options: './src/options/index.ts',
    popup: './src/popup/index.ts',
    background: './src/background.ts',
  },
  output: {
    filename: '[name].js',
    path: output,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
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
