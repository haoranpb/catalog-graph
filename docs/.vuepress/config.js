module.exports = {
  title: 'Catalog Graph',
  plugins: [
    require('../../src/index.js')
  ],
  extraWatchFiles: [
    './../../src/**'
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link:'/guide/getting-started.html' },
      { text: 'Game of Thones', link:'/GoT/' },
      { text: 'GitHub', link: 'https://github.com/ludanxer/catalog-graph' }
    ]
  }
}
