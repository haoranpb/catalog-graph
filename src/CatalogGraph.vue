<template>
  <div class="catalog-graph">
    <h1>This is catalog-graph</h1>
  </div>
</template>

<script>
export default {
  name: 'catalog-graph',
  mounted(){
    const { pages } = this.$site
    console.log(pages)
  }
}
</script>
