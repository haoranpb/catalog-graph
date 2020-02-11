<template>
  <div class="catalog-graph">
    <svg class="catalog-graph-svg"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import GraphTree from './GraphTree'

export default {
  name: 'catalog-graph',
  data() {
    return {
      nodes: [],
      links: []
    }
  },
  props: {
    width: {
      type: Number,
      default: 900
    },
    height: {
      type: Number,
      default: 600
    },
    root: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: 'Graph Catalog'
    }
  },
  created() {
    const graphTree = new GraphTree(this.$site.pages, this.root, this.title);
    const { nodes, links } = graphTree.flatten();
    this.nodes = nodes;
    this.links = links;
  },
  mounted() {
    const simulation = this.initSimulation(this.nodes, this.links, this.width, this.height);

    // init the svg scale
    const svg = d3.select("svg.catalog-graph-svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", [0, 0, this.width, this.height]);

    const linkElements = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(this.links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));

    const nodeElements = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(this.nodes)
      .join("circle")
        .attr("r", 5)
        .attr("fill", this.color)
        .call(this.drag(simulation));

    nodeElements.append("title")
        .text(d => d.title);

    simulation.on("tick", () => {
      linkElements
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      nodeElements
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });
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
    // set color based on node type
    color: function(node) {
      return node.isLeaf() ? '#3EAF7C': '#C28229';
    },
    // init the simulation for the graph
    initSimulation: function(nodes, links, width, height) {
      const simulation = d3.forceSimulation(nodes)
        // a force for each relationship
        // ?no strength specificed, values automaticly do the trick?
        .force('link', d3.forceLink(links).id(node => node.id))
        // a global electrostatic effect to keep the nodes away from each other
        .force('charge', d3.forceManyBody())
        // a gblobal force to move all nodes to the center of the svg
        .force('center', d3.forceCenter(width / 2, height / 2));

      return simulation;
    }
  }
}
</script>
