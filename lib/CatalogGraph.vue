<template>
  <div class='catalog-graph'>
    <svg class='catalog-graph-svg'></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import merge from 'lodash/merge'
import GraphTree from './graph/GraphTree'
import fallback from './graph/fallback'

export default {
  name: 'catalog-graph',
  data() {
    return {
      options: fallback
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
    merge(this.options, this.$catalogGraph);
  },
  mounted() {
    const graphTree = new GraphTree(this.$site.pages, this.root, this.title);
    const { nodes, links } = graphTree.flatten();
    const simulation = this.initSimulation(nodes, links, this.width, this.height);

    // init the svg scale
    const svg = d3.select('svg.catalog-graph-svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', [0, 0, this.width, this.height]);

    const linkElements = this.initLines(svg, this.options.line, links);
    const nodeElements = this.initNodes(svg, this.options.node, nodes);

    this.nodeEnhance(nodeElements, this.options.node, simulation);

    simulation.on('tick', () => {
      linkElements
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      nodeElements
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
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
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    },
    initSimulation: function(nodes, links, width, height) {
      const simulation = d3.forceSimulation(nodes)
        // a force for each relationship
        .force('link', d3.forceLink(links).id(node => node.id))
        // a global electrostatic effect to keep the nodes away from each other
        .force('charge', d3.forceManyBody().strength(-20))
        // a gblobal force to move all nodes to the center of the svg
        .force('center', d3.forceCenter(width / 2, height / 2));

      return simulation;
    },
    initNodes: function(svg, options, nodes) {
      return svg.append('g')
          .attr('stroke', options.borderColor)
          .attr('stroke-width', options.borderWidth)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
          .attr('r', options.radius)
          .attr('fill', options.color);
    },
    initLines: function(svg, options, links) {
      return svg.append('g')
          .attr('stroke', options.color)
          .attr('stroke-opacity', options.opacity)
        .selectAll('line')
        .data(links)
        .join('line')
          .attr('stroke-width', options.width);
    },
    nodeEnhance: function(nodeElements, options, simulation) {

      nodeElements.append('title').text(options.title);

      nodeElements.on('dblclick', d => options.dblclick(d, this.$router));

      nodeElements.call(this.drag(simulation));
    }
  }
}
</script>
