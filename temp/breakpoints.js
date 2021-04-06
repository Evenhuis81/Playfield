import { readonly, ref } from "vue"

const views = {
    xs: '(max-width: 599px)',
    sm: '(min-width: 600px) and (max-width: 959px)',
    // -16px on desktop for browser scrollbar:
    md: '(min-width: 960px) and (max-width: 1263px)',
    lg: '(min-width: 1264px) and (max-width: 1903px)',
    xl: '(min-width: 1904px)',
}

const breakpoint = ref('')

const setView = ((mql, view) => {
    // console.log('setview')
    if (mql.matches) breakpoint.value = view
})

Object.keys(views).forEach(view => {
    // console.log('runonce times 5')
    const mql = window.matchMedia(views[view])
    setView(mql, view)
    mql.addListener(e =>  setView(e, view))
});

export default readonly(breakpoint)
