# Frontmatter

You may also want to check out the [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-frontmatter-formats) in VuePress.

Frontmatter gives you the freedom to manually add properties to a page.

## Predefined Varibles

```md
---
catalogGraph:
  - target: ../../../House Lannister/Tywin Lannister/Cersei Lannister/Joffrey Baratheon.html
  - target: ../../../House Lannister/Tywin Lannister/Cersei Lannister/Tommen Baratheon.html
---

# Margaery Tyrell
```

```md
---
catalogGraph:
  - word: Winter Is Coming
---

# House Stark
```

## Alternatively

[node.frontmatter](/api.html#node-frontmatter) allows you to access varibles defined outside the `catalogGraph`.
