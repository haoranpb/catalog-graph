const path = require('path')

// Stringify functions
replacer = (key, value) => {
  switch(typeof value) {
    case 'function': return value.toString();
    case 'string': return '\'' + value + '\'';
    default: return value;
  }
}

const optionTypes = ['function', 'number', 'string'];

module.exports = (options) => ({
  name: 'vuepress-plugin-catalog-graph',
  async ready() {
    // Check for configuration before continue
    for(let field in options) {
      for(let value of Object.values(options[field])) {
        if(!optionTypes.includes(typeof value)) {
          console.log('Your configuration for plugin catalog-graph has failed!');
          process.exit(1);
        }
      }
    }
  },
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
    { // There maybe a better way to pass on users' configurations
      name: 'catalog-graph-enhancer',
      content: `
      export default ({ Vue }) => {
        Vue.prototype.$catalogGraph = ` + JSON.stringify(options, replacer).replace(/\\n|\"/g, "") + `
      }`.trim()
    }
  ]
})
