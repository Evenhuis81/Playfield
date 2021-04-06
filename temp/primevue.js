import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

export default (app) => {
        app.use(PrimeVue)
        app.component('Button', Button)
}
