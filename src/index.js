const path = require('path')

// Stringify functions
replacer = (key, value) => {
  return (typeof value === 'function') ? value.toString() : value;
}

module.exports = (options) => ({
  name: 'vuepress-plugin-catalog-graph',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
    { // There maybe a better way to pass on users' configurations
      name: 'catalog-graph-enhancer',
      content: `
      export default ({ Vue }) => {
        Vue.prototype.$catalogGraph = ` + JSON.stringify(options, replacer).replace(/\"/g, "") + `
      }`.trim()
    }
  ]
})
