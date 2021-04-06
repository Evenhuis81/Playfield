<template>
    <div ref="mirror" :style="mirrorSt"></div>
    <div :style="cursor"></div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const mirror = ref(null)
        return { mirror }
    },
    data: () => ({
        mirrorSt: {
            position: 'absolute',
            opacity: '1',
        },
        cursor: {
            position: 'absolute',
            backgroundColor: 'black',
            top: '2px',
            height: '18px',
            width: '1px',
        }
    })
}
</script>
