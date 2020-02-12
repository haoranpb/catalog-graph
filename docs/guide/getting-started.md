# Getting Started

In addition to this document, you may also want to check out [How to Use Plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html#using-a-plugin) in VuePress.

There is a live demo in this document site: [Game of Thones](../GoT).

## Install

::: warning Note
**Globally installed** VuePress won't be able to find **locally installed** plugins.
:::

```shell
yarn install -D vuepress-plugin-catalog-graph
```

## Enalbe in VuePress

```js
module.exports = {
  plugins: [ 'vuepress-plugin-catalog-graph' ]
}
```

## Add to Your Document

```markdown
# Catalog Graph

<CatalogGraph />
```
