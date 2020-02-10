'use strict'

export default class GraphNode {
  /**
   * @param {String} path the URL (excluding the domain name) for your page/post. Double click to nav.
   * @param {String} title markdown title. Allow overwrite with frontmatter.
   * @param {Number} level the node's level based on the file structure.
   * @param {Array} children the node's array of children.
   */
  constructor(page){
    this.children = []
    this.path = page.path
    this.level = ''
    console.log(this)
  }
}
