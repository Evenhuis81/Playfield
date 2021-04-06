
<script>
import { computed, nextTick, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const lStyle = reactive({
            position: 'absolute',
            transform: 'translateY(75px)',
            height: '40px',
            width: '200px',
            backgroundColor: 'black',
            zIndex: '-1',
            transition: 'all 1s linear',
        })
        // onMounted(() => {
            // console.log(this, 'e')
        // })
        const store = useStore()
        const loginOpened = computed(() => { 
            if (store.state.openLogin === true) {
                // this.$nextTick(() => {
                //     console.log('tick')
                //     lStyle.transform = 'translateY(120px)' 
                // })
                // console.log(this)
                setTimeout(() => { lStyle.transform = 'translateY(120px)' }, 100)
            }
            if (store.state.openLogin === false) {
                // nextTick()
                setTimeout(() => { lStyle.transform = 'translateY(75px)' }, 100)
            }
            return store.state.openLogin
        })
        console.log(store.state.openLogin)

        return { loginOpened, lStyle }
    },
    render() {
        console.log(this)
    }
}
</script>

<style scoped>
.container {
    position: relative;
    /* z-index: 1; */
    background: white;
    border-bottom: 1px solid black;
}
.topbar {
    display: flex;
    margin: auto;
    max-width: 1140px;
    height: 116px;
    justify-content: space-between;
    align-items: center;
}
</style>