---
sidebarDepth: 'auto'
---

# Configuration

Catalog Graph allows two types of configurations:

1. [Plugin level configuration - Options](#options)
2. [Component level confuration - Attributes](#attributes)

Plugin level configuration is more like a global configuration in the context, it will affect every catalog graph components in your documentation.

## Options

You may also want to check out the [Plugin Options](https://vuepress.vuejs.org/plugin/using-a-plugin.html#plugin-options) in VuePress.

::: warning
Do not use double quotation marks " in your Options, all of them will be removed during parsing.
:::

::: details Compelet Set of Default Options

<<< @/lib/graph/fallback.js

:::

### node

#### color

* Type: `Function | String`

#### dblclick

* Type: `Function`

#### title

* Type: `Function | String`

#### radius

* Type: `Function | Number`

#### borderColor

* Type: `Function | String`

#### borderWidth

* Type: `Function | Number`

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
