<template>
    <!-- <div style="display: flex; justify-content: center; align-items: center; width: 100px; height: 100px;"> -->
        <svg-icon icon="user" @click="open"></svg-icon>
    

    <!-- </div> -->
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import SvgIcon from '../../SvgIcon'
export default {
    // components: { SvgIcon }
    setup() {
        const store = useStore()
        const open = () => store.state.openLogin = !store.state.openLogin

        return {
            open
        }
    }
}
</script>

<style>
.test {
    /*  */
}
</style>