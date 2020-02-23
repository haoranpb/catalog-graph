---
sidebarDepth: 3
---

# Configuration

Catalog Graph allows two types of configurations:

1. [Plugin level configuration - Options](#options)
2. [Component level confuration - Attributes](#attributes)

Plugin level configuration is more like a global configuration in the context, it will affect every catalog graph components in your documentation.

## Options

You may also want to check out the [Plugin Options](https://vuepress.vuejs.org/plugin/using-a-plugin.html#plugin-options) in VuePress.

::: warning
Options will be passed to the server as a raw String, there are some rules you need to follow

1. Do not use **double quotation marks** " in your Options, all of them will be removed during parsing
2. Always put your functions **inside the Options object** like the default Options below
:::

::: details Compelet Set of Default Options

<<< @/lib/graph/fallback.js

:::

### node

All of the `Functions` under node section accept an argument: [GraphNode](./api-reference.html#graphnode).

When two types are allowed, like `Function | String` or `Function | Number`. Use `String` or `Number` if you want all of the nodes to have the same value. Use a `function` if you want more flexibility.

#### color

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the color for each node.

#### dblclick

* Type: `Function`
* Arguments:
  * GraphNode
  * VueRouter
* Usage

  Define your custimized behavior when double click a node.

#### title

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the title for the svg element.

#### radius

* Type: `Function | Number`
* Arguments:
  * GraphNode
* Usage

  Define the node's radius.

#### borderColor

* Type: `Function | String`
* Arguments:
  * GraphNode
* Usage

  Define the node's border's color.

#### borderWidth

* Type: `Function | Number`
* Arguments:
  * GraphNode
* Usage

  Define the node's border's width.

### line

#### width

* Type: `Function | Number`

#### color

* Type: `Function | String`

#### opacity

* Type: `Function | Number`

## Attributes

```html
<CatalogGraph root='/GoT/' title='Game of Thones' />
```

### root

* Type: `String`
* Default: `\`

### title

* Type: `String`
* Default: `Graph Catalog`

### height

* Type: `Number`
* Default: `900`

### width

* Type: `Number`
* Default: `600`

## Frontmatter

You may also want to check out the [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats) in VuePress.
