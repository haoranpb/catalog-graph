module.exports = {
  title: 'Catalog Graph',
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-146772217-3'
    }],
    require('../../lib/index.js'),
    require('./internal-plugin.js')
  ],
  extraWatchFiles: [
    '../../lib/**'
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link:'/guide/' },
      { text: 'Game of Thones', link:'/GoT/' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
      { text: 'GitHub', link: 'https://github.com/ludanxer/catalog-graph' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ['', 'Introduction'],
            'getting-started',
            'configuration'
          ]
        }
      ]
    }
  }
}
