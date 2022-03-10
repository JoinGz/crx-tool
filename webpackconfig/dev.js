import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import base from './base.js'
import { merge } from 'webpack-merge'


export default merge(base, {
  // infrastructureLogging: { debug: /PackFileCache/ }, // debug信息
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watch: true,
  // cache: {
  //   // type: 'filesystem', // 使用文件缓存
  //   // cacheDirectory: resolve(__dirname, '.cache')
  // },
})
