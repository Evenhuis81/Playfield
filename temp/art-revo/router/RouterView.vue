<script>
import { h, computed, ref } from 'vue'
import routes from './routes.js'
import { currentRoute } from './history.js'

export default {
  setup() {
    const current = currentRoute
    const routedComponent = computed(() => {
      const route = routes.main.find(route => route.path == current.value) || routes.notfound
      return route.component
    })

    return { current, routedComponent }
  },
  render() {
      return h(this.routedComponent)
  }
}
</script>
