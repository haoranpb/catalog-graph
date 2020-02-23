# Getting Started

In addition to this document, you may also want to check out [How to Use Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html#using-a-plugin) in VuePress.

**Live Demo** :point_right: [Game of Thones](../GoT)

Only three steps to get things done :point_down:!

## Installation

Install `vuepress-plugin-catalog-graph` to your local dependency.

::: warning Note
**Globally installed** VuePress won't be able to find **locally installed** plugins.
:::

```shell
yarn install -D vuepress-plugin-catalog-graph
```

## Config VuePress

Config VuePress to enable Catalog Graph.

```js
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-catalog-graph']
}
```

## Done :tada:

Put `<CatalogGraph />` in your document, and go check it out!

```markdown
# Catalog Graph

<CatalogGraph />
```

## What's Next

Need more custimization? Visit [Configuration](../config/).
