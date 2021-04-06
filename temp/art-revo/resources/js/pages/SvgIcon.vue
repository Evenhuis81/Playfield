<template>
    <div
        :style="svgContainer"
        @mouseenter="hovering"
        @mouseleave="dehovering"
        @mousedown="mouseDowned"
        @mouseup="mouseUpped"
    >
        <svg :style="svgStyle" :viewBox="`0 0 ${svg.width} ${svg.height}`">
            <path :fill="'currentColor'" :d="svg.path"></path>
        </svg>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import getIcon from "../icons"

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: '1',
        }
    },
    setup(props) {
        const active = ref(false)
        const svgContainer = reactive({
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            cursor: 'pointer',
            fontSize: props.size + 'rem',
            // textAlign: 'center',
            width: '40px',
            height: '40px',
            // textAlign: 'center',
            // lineHeight: '40px',
            margin: '0 auto',
            borderRadius: props.rounded ? '50%' : '0%',
        })
        const svgStyle = reactive({
            fill: '#757575',
            fontSize: '1em',
            display: 'inline-block',
            height: '1em',
            verticalAlign: '-.125em',
            overflow: 'visible',
            // preserveAspectRatio: "xMaxYMax meet",
        })
        const iconBackground = reactive({
            
        })
        const hovering = () => {
            svgContainer.backgroundColor = active.value ? '#e3edf7' : '#f0f0f0'
        }
        const dehovering = () => {
            svgContainer.backgroundColor = '#fff'
        }
        const mouseDowned = () => {
            svgContainer.fontSize = props.size * 0.8 + 'rem'
            svgContainer.width = '30px'
            svgContainer.height = '30px'
            svgContainer.lineHeight = '30px'
        }
        const mouseUpped = () => {
            svgContainer.fontSize = props.size + 'rem'
            svgContainer.width = '40px'
            svgContainer.height = '40px'
            svgContainer.lineHeight = '40px'
        }
        const svg = computed(() => getIcon(props.icon))

        return {
            active,
            svgContainer,
            svgStyle,
            hovering,
            dehovering,
            mouseDowned,
            mouseUpped,
            svg,
        }
    },
}
</script>

<style scoped>
.test {
    /* vertical-align: middle; */
}
</style>