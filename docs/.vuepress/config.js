module.exports = {
  title: 'vuepress-plugin-catalog-graph',
  plugins: [
    require('../../src/index.js')
  ],
  themeConfig: {
    nav: [
      {text: 'Demo', link:'/demo/'},
      {text: 'GitHub', link: 'https://github.com/ludanxer/vuepress-plugin-catalog-graph'}
    ]
  }
}
