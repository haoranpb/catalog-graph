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
              return '#98999C';
            case d.regularPath.includes('/House Targaryen/'):
              return '#E06668';
            case d.regularPath.includes('/House Baratheon/'):
              return '#A39388';
            case d.regularPath.includes('/House Tyrell/'):
              return '#EB983F';
            case d.regularPath.includes('/House Lannister/'):
              return '#E9C966';
            case d.regularPath.includes('/House Tully/'):
              return '#57B5C2';
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
