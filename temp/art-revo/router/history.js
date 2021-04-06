import { ref } from 'vue';

const currentRoute = ref(window.location.pathname)

const push = route => {
    // const previousRoute = window.location.pathname
    window.history.pushState(null, null, route)
    currentRoute.value = route
};

window.addEventListener("popstate", () => (currentRoute.value = window.location.pathname));

export { currentRoute, push }
