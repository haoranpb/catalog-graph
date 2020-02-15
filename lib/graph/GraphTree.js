/**
 * GraphTree gererated from the a specific folder with $site.pages
 */
import GraphNode from './GraphNode';

export default class GraphTree {
  /**
   * A GraphTree gererated from the a specific folder
   * @param {objects} pages $site.pages
   * @param {string} root the root path of the GraphTree
   * @param {string} title the tile for the rootNode
   */
  constructor(pages, root = '/', title = 'Graph Tree') {
    // Initialize the root node
    this.rootNode = new GraphNode({
      title: title,
      regularPath: root
    });

    // Add the pages under the sub-folder into GraphTree
    for(let page of pages) { 
      if(page.regularPath.startsWith(this.rootNode.regularPath))
        this.rootNode.addChild(new GraphNode(page));
    }
  }

  /**
   * Flattern the GraphTree into an array of nodes and an array of links
   */
  flatten() {
    return DFS(this.rootNode);
  }
}


function DFS(node) {
  let nodeArray = [node];
  let linkArray = [];
  for(let child of node.children) {
    const { nodes, links } = DFS(child);

    nodeArray = nodeArray.concat(nodes);

    linkArray.push({
      target: node.id,
      source: child.id,
      value: 8
    });
    linkArray = linkArray.concat(links);
  }
  return {
    nodes: nodeArray,
    links: linkArray
  }
}
