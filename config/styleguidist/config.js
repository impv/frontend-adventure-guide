const path = require('path')

const { createConfig, babel, typescript, resolve } = require('webpack-blocks')

module.exports = {
  components: '../../src/components/**/index.{ts,tsx}',
  ignore: ['**/components/App/**/*'],
  showCode: true,
  showUsage: true,
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: createConfig([
    typescript(),
    babel(),
    resolve({ alias: { '~': path.resolve(__dirname, '../../src/') } })
  ]),
  styles: {
    Playground: {
      preview: {
        backgroundColor: '#F8BA69'
      }
    }
  }
}
