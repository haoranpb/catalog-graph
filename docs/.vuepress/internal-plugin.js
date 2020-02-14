const path = require('path')

/**
 * Add project README to document site's introduction page
 */
module.exports = {
  additionalPages: [
    {
     path: '/guide/',
     filePath: path.resolve(__dirname, '../../README.md')
    }
  ]
}
