import CatalogGraph from './CatalogGraph.vue'
import demoData from './demo.json'

export default ({ Vue }) => {
  Vue.component('CatalogGraph', CatalogGraph);

  Vue.mixin({
    computed: {
      $demoData: function() {
        return demoData
      }
    }
  });
}
