<template>
    <!-- <span style="font-size: 1rem;"> -->
        <svg viewBox="0 0 320 512" :style="{fontSize: '10em', display: 'inline-block', height: '1em', verticalAlign: '2em', overflow: 'visible'}">
            <path :d="svg.path"></path>
        </svg>
    <!-- </span> -->
</template>

<script>
import getIcon from "../svg-icons.js"

export default {
    props: ['icon'],
    setup(props) {
        return {
            svg: getIcon(props.icon)
        }
    }
}
</script>
