<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data: () => ({
        style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    })
}
</script>