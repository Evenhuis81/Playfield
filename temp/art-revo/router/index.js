// import NotFound from '@/views/NotFound.vue'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'
import { push } from './history'

export default {
    install: (app) => {
        app.component('router-view', RouterView)
        app.component('router-link', RouterLink)
        app.config.globalProperties.$pushRoute = push
        // app.config.globalProperties.$route = 
        // app.config.globalProperties.$router = 
    }
}
