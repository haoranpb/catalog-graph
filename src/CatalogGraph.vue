<template>
  <div class="catalog-graph">
    <h1>This is catalog-graph</h1>
    <svg class="catalog-graph-svg"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import func from '../vue-temp/vue-editor-bridge';

export default {
  name: 'catalog-graph',
  data() {
    return {
      width: 600,
      height: 600
    }
  },
  mounted() {
    const links = this.$demoData.links.map(d => Object.create(d));
    const nodes = this.$demoData.nodes.map(d => Object.create(d));

    const simulation = this.initSimulation(nodes, links, this.width, this.height);
    console.log(links)
    // // init the svg scale
    // const svg = d3.select("svg.catalog-graph-svg")
    //   .attr("viewBox", [0, 0, this.width, this.height]);

    // const link = svg.append("g")
    //     .attr("stroke", "#999")
    //     .attr("stroke-opacity", 0.6)
    //   .selectAll("line")
    //   .data(links)
    //   .join("line")
    //     .attr("stroke-width", d => Math.sqrt(d.value));

    // const node = svg.append("g")
    //     .attr("stroke", "#fff")
    //     .attr("stroke-width", 1.5)
    //   .selectAll("circle")
    //   .data(nodes)
    //   .join("circle")
    //     .attr("r", 5)
    //     .attr("fill", this.color)
    //     .call(this.drag(simulation));

    // node.append("title")
    //     .text(d => d.id);

    // simulation.on("tick", () => {
    //   link
    //     .attr("x1", d => d.source.x)
    //     .attr("y1", d => d.source.y)
    //     .attr("x2", d => d.target.x)
    //     .attr("y2", d => d.target.y);

    //   node
    //     .attr("cx", d => d.x)
    //     .attr("cy", d => d.y);
    // });
  },
  methods: {
    // don't quite understand, but it adds the simulation to drag and drop events
    drag: function(simulation) {
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
    },
    // set the color for each node based on group
    color: function(node) {
      const scale = d3.scaleOrdinal(d3.schemeCategory10);
      return scale(node.group);
    },
    // init the simulation for the graph
    initSimulation: function(nodes, links, width, height) {
      const simulation = d3.forceSimulation(nodes)
        // a force for each relationship
        // ?no strength specificed, values automaticly do the trick?
        .force('link', d3.forceLink(links).id(d => d.id))
        // a global electrostatic effect to keep the nodes away from each other
        .force('charge', d3.forceManyBody())
        // a gblobal force to move all nodes to the center of the svg
        .force('center', d3.forceCenter(width / 2, height / 2));

      return simulation;
    }
  }
}
</script>
