'use strict'

/**
 * Default functions for configuration
 * 
 * Fall back to those functions if user does configure
 */

/**
 * The default color for GraphNode
 * @param {GraphNode} node 
 */
export function color(node) {
  return node.isLeaf() ? '#3EAF7C': '#C28229';
}
