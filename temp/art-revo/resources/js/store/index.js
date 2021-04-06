import { createStore } from 'vuex'
import auth from './modules/auth'
import categories from './modules/categories'

export default createStore({
    state: () => ({
        openLogin: false,
    }),
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        auth,
        categories,
    }
})
