module.exports = {
  title: 'vuepress-plugin-catalog-graph',
  plugins: [
    require('../../src/index.js')
  ],
  extraWatchFiles: [
    './../../src/**'
  ],
  themeConfig: {
    nav: [
      {text: 'Guide', link:'/guide/'},
      {text: 'Game of Thones', link:'/GoT/'},
      {text: 'GitHub', link: 'https://github.com/ludanxer/vuepress-plugin-catalog-graph'}
    ]
  }
}
