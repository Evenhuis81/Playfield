<template>
    <div :style="rightBar">This is the site's right bar</div>
</template>

<script>
export default {
    data: () => ({
        rightBar: {
            float: 'right',
            width: '140px',
            height: '400px',
            backgroundColor: '#09F',
            borderLeft: '1px dashed #694717',
        }
    }),
}
</script>

<style>

</style>
