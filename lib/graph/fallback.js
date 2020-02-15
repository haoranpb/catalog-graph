'use strict'

/**
 * Default options for configuration
 */

module.exports = {
  node: {
    color: d => d.isLeaf() ? '#3EAF7C': '#C28229',
    dblclick: (d, router) => router.push(d.regularPath),
    title: d => d.title,
    radius: 6,
    borderColor: '#fff',
    borderWidth: 1.6
  },
  line: {
    color: '#999',
    opacity: 0.6,
    width: d => Math.sqrt(d.value)
  }
}
