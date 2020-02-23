---
sidebarDepth: 3
---

# Option

You may also want to check out the [Plugin Options](https://vuepress.vuejs.org/plugin/using-a-plugin.html#plugin-options) in VuePress.

When two types are allowed, like `Function | String` or `Function | Number`. Use `String` or `Number` if you want all of the nodes/line to have the same value. Use a `function` if you want more flexibility.

::: warning
Options will be passed to the server as a raw String, there are some rules you need to follow

1. Do not use **double quotation marks** " in your Options, all of them will be removed during parsing
2. Always put your functions **inside the Options object** like the default Options below
:::

::: details Compelet Set of Default Options

<<< @/lib/graph/fallback.js

:::

## node

All of the `Functions` under node section accept an argument: [GraphNode](/api.html#graphnode).

### color

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the color for each node.

### dblclick

* Type: `Function`
* Arguments:
  * GraphNode
  * VueRouter
* Usage

  Define your custimized behavior when double click a node.

### title

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the title for the svg element.

### radius

* Type: `Function | Number`
* Arguments:
  * GraphNode
* Usage

  Define the node's radius.

### borderColor

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the node's border's color.

### borderWidth

* Type: `Function | Number`
* Arguments:
  * GraphNode
* Usage

  Define the node's border's width.

## line

All of the `Functions` under line section accept an argument: `{ Obejct }` [Line](/api.html#line).

### width

* Type: `Function | Number`
* Arguments:
  * Line
* Usage

  Define the line's width.

### color

* Type: `Function | String`
* Arguments:
  * Line
* Usage

  Define the line's color.

### opacity

* Type: `Function | Number`
* Arguments:
  * Line
* Usage

  Define the line's opacity.
