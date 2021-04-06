<template>
    <div :style="style">
        <span>Create Element</span>
    </div>
</template>

<script>
export default {
    data: () => ({
        style: {
            position: 'absolute',
            height: '30px',
            width: '120px',
            background: 'light-blue',
        }
    })
}
</script>

