<template>
  <div class="catalog-graph">
    <h1>This is catalog-graph</h1>
  </div>
</template>

<script>
import { forceSimulation } from 'd3-force'
import GraphNode from './graphNode'
// Demo: https://observablehq.com/@d3/force-directed-graph?collection=@d3/d3-force
export default {
  name: 'catalog-graph',
  data(){
    return{
      root: undefined
    }
  },
  // mounted(){
  //   const { pages } = this.$site
  //   console.log(pages)
  // },
  created(){
    // Parse the whole pages to an array of GraphNodes, and find the root node
    console.log(forceSimulation)
    const { pages } = this.$site
    console.log(this.$page)
    for(let page of pages){
      let newNode = new GraphNode(page)
      // console.log(newNode)
    }
  },
  computed: {

  }
}
</script>
