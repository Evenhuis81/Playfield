<template>
    <div class="middle-container">
        <div v-if="categories" v-for="main in categories.filter(cat => cat.parent_id == 0)" class="middle-links">{{ main.name }}</div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const categories = computed(() => store.state.categories.categories)

        return { categories }
    }
}
</script>

<style scoped>
.middle-container {
    display: flex;
}
.middle-links {
    cursor: pointer;
    border-radius: 10%;
    margin-right: 10px;
    color: white;
    padding: 10px 20px;
    border: 1px solid red;
    background-color: blueviolet;
}
</style>