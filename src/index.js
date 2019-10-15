const path = require('path')

module.exports = () => ({
  name: 'vuepress-plugin-catalog-graph',
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
