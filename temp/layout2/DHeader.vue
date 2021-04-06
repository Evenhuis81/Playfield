<template>
    <div :style="header"></div>
    <button @click="changeThat">Change something</button>
    <input type="range" min="1" max="100" value="50">
</template>

<script>
import store from "@/store"

export default {
    setup() {
        const header = store.headerStyle
        const changeThat = store.changeThat

        return { header, changeThat }
    }
}
</script>

<style>

</style>