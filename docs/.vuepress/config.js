module.exports = {
  title: 'Catalog Graph',
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-146772217-3'
    }],
    [require('../../lib/index.js'), {
      node: {
        color: d => {
          switch(true) {
            case d.regularPath.includes('/House Stark/'):
              return 'rgb(109, 110, 113)';
            case d.regularPath.includes('/House Targaryen/'):
              return 'rgb(224, 102, 104)';
            case d.regularPath.includes('/House Baratheon/'):
              return 'rgb(153, 135, 123)';
            case d.regularPath.includes('/House Tyrell/'):
              return 'rgb(235, 152, 63)';
            case d.regularPath.includes('/House Lannister/'):
              return 'rgb(233, 201, 102)';
            case d.regularPath.includes('/House Tully/'):
              return 'rgb(87, 181, 194)';
            default: return '#C28229';
          }
        }
      }
    }],
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
