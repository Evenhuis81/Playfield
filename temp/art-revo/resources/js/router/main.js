import Banken from "../pages/base/Banken.vue"
import Stoelen from "../pages/base/Stoelen.vue"
import Tafels from "../pages/base/Tafels.vue"
import PiedDeStalle from "../pages/base/PiedDeStalle.vue"
import Accessoires from "../pages/base/Accessoires.vue"
import Divers from "../pages/base/Divers.vue"

export default [
    {
        path: "/banken",
        name: "banken",
        component: Banken,
    },
    {
        path: "/stoelen",
        name: "stoelen",
        component: Stoelen,
    },
    {
        path: "/tafels",
        name: "tafels",
        component: Tafels,
    },
    {
        path: "/pied-de-stalle",
        name: "pied-de-stalle",
        component: PiedDeStalle
    },
    {
        path: "/accessoires",
        name: "accessoires",
        component: Accessoires,
    },
    {
        path: "/divers",
        name: "divers",
        component: Divers,
    },
]
