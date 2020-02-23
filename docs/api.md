---
sidebar: auto
---

# API Reference

## GraphNode

Each GraphNode represents an actual node in the Catalog Graph.

### node.title

* Type: `String`
* Usage

  The node's title.

  Default to the corresponding page's title or the parent-folder's name if [hasPage](#node-haspage) returns false.

### node.regularPath

* Type: `String`
* Usage

  The page's file hierarchy path.

### node.id

* Type: `String`
* Usage

  Default to the corresponding page's key or the [regularPath](#node-regularpath) if [hasPage](#node-haspage) returns false.

### node.frontmatter

* Type: `Object`
* Usage

  Addtional properteis added to the pages. See [frontmatter](/config/frontmatter.html) for more detail.

### node.parent

* Type: `{Object} GraphNode`
* Usage

  The node's parent node. `null` when root node.

### node.children

* Type: `Array<GraphNode>`
* Usage

  The node's children nodes.

### node.hasPage()

* Type: `Function`
* Usage

  Determintes if the node has a corresponding page.

## Line

Currently, the Line Object is still limited.

### line.target

* Type: `String GraphNode.id`

### line.source

* Type: `String GraphNode.id`

### line.value

* Type: `Number`
* Usage

  Currently, value is fixed to `8`.
