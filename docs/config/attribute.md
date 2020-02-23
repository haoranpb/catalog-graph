# Attribute

The attributes for the live demo:

```html
<CatalogGraph root='/GoT/' title='Game of Thones' />
```

The `root` is set to `/GoT/` because I only want pages under [GoT](https://github.com/ludanxer/catalog-graph/tree/master/docs/GoT) folder to be generated into the Graph.

## root

* Type: `String`
* Default: `\`
* Usage

  The `root` for the Catalog Graph component, only pages' `path` start with the `root` will be generated into the Graph.
  
  It should always start and end with a slash.

## title

* Type: `String`
* Default: `Graph Catalog`
* Usage

  The `title` for the root node in the Catalog Graph.

## height

* Type: `Number`
* Default: `900`
* Usage

  The `height` for the svg.

## width

* Type: `Number`
* Default: `600`
* Usage

  The `width` for the svg.
