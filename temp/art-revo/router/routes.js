import Home from "@/views/Home.vue"
import Meubels from "@/views/Meubels.vue"
import Schilderijen from "@/views/Schilderijen.vue"
import Accessoires from "@/views/Accessoires.vue"
import Contact from "@/views/Contact.vue"
import Login from "@/views/Login.vue"
import NotFound from '@/views/NotFound.vue'

export default {
    main: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/meubels",
            name: "meubels",
            component: Meubels,
        },
        {
            path: "/schilderijen",
            name: "schilderijen",
            component: Schilderijen,
        },
        {
            path: "/accessoires",
            name: "accessoires",
            component: Accessoires,
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
        },
    ],
    auth: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
    ],
    notfound: {
        path: '/404',
        name: 'pagenotfound',
        component: NotFound,
    }
}