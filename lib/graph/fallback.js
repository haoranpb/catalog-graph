/**
 * Default options for configuration
 */

export default {
  node: {
    color: d => d.hasPage() ? '#3EAF7C': '#C28229',
    dblclick: (d, router) => router.push(d.regularPath),
    title: d => d.title,
    radius: 6,
    borderColor: '#fff',
    borderWidth: 1.6
  },
  line: {
    width: d => Math.sqrt(d.value),
    color: '#999',
    opacity: 0.6
  }
}
