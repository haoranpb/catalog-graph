/**
 * GraphNode for GraphTree
 */

export default class GraphNode {
  /**
   * A node of the graph, there are two types of nodes
   * 1. Leaf, a leaf represents a page in the VuePress document
   * 2. Node, a node is like a folder in file system
   * 
   * @param {{Object}} page a page in VuePress
   * @param {title} page.title the page's title
   * @param {key} page.key the page's key or a node's path
   * @param {regularPath} page.regularPath page's path according to file hierarchy
   * @param {frontmatter} page.frontmatter page's frontmatter
   */
  constructor({ title, key, regularPath, frontmatter }, parent = null) {
    this.title = title;
    this.regularPath = decodeURIComponent(regularPath);
    this.id = key || this.regularPath;
    this.frontmatter = frontmatter || {};
    this.parent = parent;
    this.children = [];
  }

  /**
   * Add a page to the GraphTree
   * There may be some nodes added along side with the page
   * @param {GraphNode} node 
   */
  addChild(node) {
    // New node's relative path to the ancestor(current)'s node
    const relativePath = node.regularPath.slice(this.regularPath.length);
    // First slash in the relative path
    const firstSlash = relativePath.indexOf('/');
    // It's a leaf
    if(firstSlash < 0) {
      // README under a folder
      if(this.regularPath === node.regularPath) {
        this.id = node.id;
        this.frontmatter = node.frontmatter;
      }
      else {
        node.parent = this;
        this.children.push(node);
      }
    }
    else {
      let ancestor = this._findAncestor(node.regularPath);
      if(!ancestor) {
        const newNodeIndex = this.children.push(new GraphNode({
          title: relativePath.slice(0, firstSlash),
          regularPath: node.regularPath.slice(0, this.regularPath.length + firstSlash + 1)
        }, this));
        ancestor = this.children[newNodeIndex - 1];
      }
      ancestor.addChild(node);
    }
  }

  /**
   * Try to find a node's ancestor in the children array
   * @param {String} regularPath 
   * @returns {GraphNode | false}
   */
  _findAncestor(regularPath) {
    for(let child of this.children) {
      if(regularPath.startsWith(child.regularPath)) return child;
    }
    return false;
  }

  /**
   * Determine if there is a page attached to the node
   * Only use this function when the node is attached to a tree
   * @returns {boolean}
   */
  hasPage() {
    // All pages in VuePress have a unique id: v-xxxx
    return this.id.startsWith('v-');
  }
}
