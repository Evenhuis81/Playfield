require('@/bootstrap.js')

import { createApp } from 'vue'
import Main from '@/Main.vue'
import store from '@/store.js'
const app = createApp(Main).provide(
    'store', store
)

const files = require.context('@/components', true, /\.vue$/i)
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.mount("#app")
