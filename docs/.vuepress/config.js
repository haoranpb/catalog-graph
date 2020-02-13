module.exports = {
  title: 'Catalog Graph',
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-146772217-3'
    }],
    require('../../lib/index.js')
  ],
  extraWatchFiles: [
    '../../lib/**'
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link:'/guide/getting-started.html' },
      { text: 'Game of Thones', link:'/GoT/' },
      { text: 'GitHub', link: 'https://github.com/ludanxer/catalog-graph' }
    ]
  }
}
