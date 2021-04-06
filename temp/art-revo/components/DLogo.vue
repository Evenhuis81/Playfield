<template>
    <a v-if="href" :href="href">
        <img :style="{height: height}" :src="src" :alt="alt">
    </a>
</template>

<script>
export default {
    props: ['href', 'height', 'src', 'alt'],
    mounted() {}
}
</script>
