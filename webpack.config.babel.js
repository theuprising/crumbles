import path from 'path'
import fs from 'fs'
import { assoc, assocPath, compose, map, filter, always, evolve, append } from 'ramda'

const projectPackage = require(path.join(process.cwd(), 'package.json'))
const { name: projectName } = projectPackage

const webpack = always({
  module: {
    noParse: /^\..+$/, // do not parse hidden files
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules'
    ]
  }
})

const browserEntry = assoc(
  'entry',
  {
    browser: ['./src/index.js']
  }
)

const browser = compose(
  evolve({
    resolve: assoc(
      'aliasFields',
      ['browserAliases']
    )
  }),
  assoc('target', 'web')
)

const nodeEntry = assoc(
  'entry',
  {
    node: ['./src/index.js']
  }
)

const babel = evolve({
  module: {
    loaders: append({
      test: /\.jsx?$/,
      exclude: /(node_modules|webpack\/hot)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', {modules: false}], 'stage-0', 'react'],
        plugins: []
      }
    })
  }
})

const detupelize = arrOfTupels => {
  let obj = {}
  arrOfTupels.forEach(t => {
    const [key, value] = t
    obj[key] = value
  })
  return obj
}

const makeExterns = compose(
  detupelize,
  filter(m => m !== '.bin'),
  map(m => [m, `commonjs ${m}`])
)

const library = evolve({
  output: compose(
    assoc('library', projectName),
    assoc('libraryTarget', 'commonjs2')
  )
})

const node = compose(
  assocPath(['output', 'libraryTarget'], 'commonjs2'),
  evolve({
    resolve: assoc(
      'aliasFields',
      ['nodeAliases']
    )
  }),
  assoc('externals', makeExterns(fs.readdirSync('node_modules'))),
  assoc('target', 'node'),
  assoc('node', {
    __filename: false,
    __dirname: false
  })
)

const nodeConfig = compose(
  library,
  node,
  babel,
  nodeEntry,
  webpack
)()

const browserConfig = compose(
  library,
  babel,
  browser,
  browserEntry,
  webpack
)()

console.log(browserConfig)

export default [nodeConfig, browserConfig]
