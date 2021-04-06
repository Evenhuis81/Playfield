<template>
    <div :style="leftBar">This is the site's left bar</div>
</template>

<script>
export default {
    data: () => ({
        leftBar: {
            float: 'left',
            width: '140px',
            height: '90vh',
            backgroundColor: '#09F',
            borderRight: '1px dashed #694717',
        }
    })
}
</script>

<style>

</style>
