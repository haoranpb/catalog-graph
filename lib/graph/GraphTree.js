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
    if(nodes.length === 1) child.maxLevel = child.minLevel = 1;
    else {
      const { maxLevel, minLevel } = calcuLevel(nodes.slice(1));
      child.maxLevel = maxLevel + 1;
      child.minLevel = minLevel + 1;
    }
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

/**
 * Calculate node level in the GraphTree
 * 
 * level is calculated from leaf to root
 * @param {GraphNode} nodes 
 */

function calcuLevel(nodes) {
  let maximum = 1;
  let minimum = 999;
  for(let node of nodes) {
    if(node.maxLevel > maximum) maximum = node.maxLevel;
    if(node.minLevel < minimum) minimum = node.minLevel;
  }
  return {
    maxLevel: maximum,
    minLevel: minimum
  };
}
