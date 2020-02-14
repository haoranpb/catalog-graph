---
sidebarDepth: 'auto'
---

# Configuration

## Options

You may also want to check out the [Plugin Options](https://vuepress.vuejs.org/plugin/using-a-plugin.html#plugin-options) in VuePress.

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-catalog-graph', {
      node: {
        color: (d) => { return d.isLeaf() ? '#3EAF7C': '#C28229'; }
      }
    }]
  ]
}
```

### node

#### color

* Type: `Function`
* Default: `(d) => { return d.isLeaf() ? '#3EAF7C': '#C28229'; }`

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
