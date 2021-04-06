// require('./bootstrap');
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';

import { CategoriesTree, SvgIcon } from "./components/base"

const app = createApp(App)
app.use(store)
app.use(router)

app.use(PrimeVue)

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('InputText', InputText)

// TODO:: create app initialiser
let token = localStorage.getItem('token')
if (token) {
    store.state.auth.token = true
    store.dispatch('auth/verify', token)
}
store.dispatch('categories/getCategories')

app.component('CategoriesTree', CategoriesTree)
app.component('SvgIcon', SvgIcon)

const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.mount("#app")
