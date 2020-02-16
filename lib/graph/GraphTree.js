/**
 * GraphTree gererated from the a specific folder with $site.pages
 */
import GraphNode from './GraphNode';
import path from 'path'

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
    return this._DFS(this.rootNode);
  }


  _DFS(node) {
    let nodeArray = [node];
    let linkArray = this._resolveRelationship(node);
    for(let child of node.children) {
      const { nodes, links } = this._DFS(child);

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
   * Resolve relationships define in frontmatter
   */
  _resolveRelationship(node) {
    let relationships = [];
    if(node.frontmatter.hasOwnProperty('catalogGraph')) {
      for(let graphProperty of node.frontmatter['catalogGraph']) {
        // Resolve absolute path
        let regularPath = path.resolve(path.dirname(node.regularPath), graphProperty['target']);
        if(!regularPath.endsWith('html')) regularPath += '/';
        // Recursively find target node
        const target = findByPath(this.rootNode, regularPath);
        // console.log(target);
        if(!target) console.error('No target found for ' + graphProperty['target']);
        else {
          relationships.push({
            target: target.id,
            source: node.id,
            value: 8
          })
        }
      }
    }
    return relationships;
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

/**
 * Recursively find target node by regularPath path
 * @param {GraphNode} node 
 * @param {String} regularPath 
 */
function findByPath(node, regularPath) {
  if(node.regularPath === regularPath) return node;
  else {
    for(let child of node.children) {
      if(regularPath.startsWith(child.regularPath)) {
        let result = findByPath(child, regularPath);
        if(result) return result;
      }
    }
  }
  return false;
}
