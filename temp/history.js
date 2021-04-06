let listener = null;

export const push = route => {
    const previousRoute = window.location.pathname;
    window.history.pushState(null, null, route);
    // listeners.forEach(listener => listener(route, previousRoute));
   listener(route, previousRoute)
};

export const listen = fn => {
  listener = fn
};
