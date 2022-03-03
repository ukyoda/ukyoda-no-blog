'use strict'

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

require('./src/__generated__/gatsby-types')

const {
  createPages,
  onCreateNode,
  createSchemaCustomization,
} = require('./src/gatsby-node/index')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

exports.createPages = createPages
exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = createSchemaCustomization

//robertmarshall.dev/blog/fix-warn-chunk-commons-mini-css-extract-plugin-error-in-gatsby-js/
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  })
}
