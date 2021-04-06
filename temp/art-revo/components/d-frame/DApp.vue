<template>
    <slot />
    <p>{{ this.$route }}</p>
    <!-- <button @click="testt">Cdafsdf</button> -->
</template>

<script>
import breakpoint from '@/breakpoint'
import { computed, onMounted, provide } from 'vue'

export default {
    setup() {
        provide('breakpoint', breakpoint)
        const testt = computed(() => console.log(this))
        onMounted(() => {
            // console.log(this)
        })
        return { testt }
    },
}
</script>

<style>

</style>
