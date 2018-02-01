const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    styles: {
      css: [
        {
          include: [path.resolve('src'), path.resolve('demo'), path.resolve('lib')],
          css: {
            modules: true,
            localIdentName: '[local]__[hash:base64:5]',
          },
        },
        {
          exclude: [path.resolve('src'), path.resolve('demo'), path.resolve('lib')],
        },
      ],
      less: [
        {
          include: [path.resolve('src'), path.resolve('demo'), path.resolve('lib')],
          css: {
            modules: true,
            localIdentName: '[local]__[hash:base64:5]',
          },
        }, {
          exclude: [path.resolve('src'), path.resolve('demo'), path.resolve('lib')],
        },
      ],
    },
  },
}
