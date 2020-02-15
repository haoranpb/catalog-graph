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
   */
  constructor({ title, key, regularPath }) {
    this.title = title;
    this.id = key || regularPath;
    this.regularPath = regularPath;
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
    if(firstSlash < 0) this.children.push(node);
    else {
      let ancestor = this.findAncestor(node);
      if(!ancestor) {
        const newNodeIndex = this.children.push(new GraphNode({
          title: relativePath.slice(0, firstSlash),
          regularPath: node.regularPath.slice(0, this.regularPath.length + firstSlash + 1)
        }));
        ancestor = this.children[newNodeIndex - 1];
      }
      ancestor.addChild(node);
    }
  }

  /**
   * Try to find a node's ancestor in the children array
   * @param {GraphNode} node 
   * @returns {GraphNode | false}
   */
  findAncestor(node) {
    for(let child of this.children) {
      if(child.isLeaf()) continue;
      if(node.regularPath.startsWith(child.regularPath)) return child;
    }
    return false;
  }

  /**
   * Determine if a node is leaf
   * Only use this function when the node is attached to a tree
   * @returns {boolean}
   */
  isLeaf() {
    // All pages in VuePress have a unique id: v-xxxx
    return this.id.startsWith('v-');
  }
}
