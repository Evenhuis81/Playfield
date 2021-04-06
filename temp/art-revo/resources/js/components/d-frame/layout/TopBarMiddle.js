import { computed, h, reactive, render } from 'vue'
import { useStore } from 'vuex'

export default {
    template: `<svg-icon icon="user"></svg-icon>`,
    setup() {
        const links = reactive({
            opacity: '0',
            cursor: 'pointer',
            borderRadius: '10%',
            marginRight: '10px',
            color: 'white',
            padding: '10px 20px',
            border: '1px solid red',
            backgroundColor: 'blueviolet',
            transition: 'all 1s linear'
        })

        const store = useStore()
        const categories = computed(() => {
            if (store.state.categories.categories) {
                setTimeout(() => {links.opacity = '1'}, 50)
                return store.state.categories.categories
            }
        })
        const mainCategories = computed(() => store.getters['categories/mainCategories'])

        return { links, categories, mainCategories }
    },
}
