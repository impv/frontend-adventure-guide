const path = require('path')

const { createConfig, babel, typescript, resolve } = require('webpack-blocks')

module.exports = {
  components: '../../src/components/**/index.{ts,tsx}',
  showCode: true,
  showUsage: true,
  styleguideDir: path.resolve(__dirname, '../../styleguide'),
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: createConfig([
    typescript(),
    babel(),
    resolve({ alias: { '~': path.resolve(__dirname, '../../src/') } })
  ]),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'ThemeWrapper')
  },
  styles: {
    Playground: {
      preview: {
        backgroundColor: '#F8BA69'
      }
    }
  },
  getComponentPathLine(componentPath) {
    const name = componentPath
      .split('/')
      .slice(0, -1)
      .reverse()[0]

    const aliasedPath = componentPath
      .replace('../../src/', '~/')
      .split('/')
      .slice(0, -1)
      .join('/')

    return `import ${name} from '${aliasedPath}'`
  }
}
