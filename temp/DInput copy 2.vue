<template>
        <input
        ref="input"
        :style="style.input"
        @keydown="keydown()"
        @focus="focus()"
        @blur="blur()"
        placeholder="Placeholder"
        spellcheck="false"
        >
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const input = ref(null)
        return { input }
    },
    data: () => ({
        focused: false,
        blink: false,
        blinkInterval: null,
        style: {
            input: {
                marginLeft: '40px',
                font: 'inherit',
            },
        },
    }),
    // computed: {
        // cursorComputed() {
            // return {
                // position: 'absolute',
                // opacity: this.cursorSwitches.active ? '1' : '0',
                // width: '8px',
                // height:'2px',
                // background: 'black',
                // top: '22px',
                // transition: this.cursorSwitches.active ? 'left 0.25s linear' : '',
            // }
        // },
        // inputComputed() {
            // return {
                // outline: 'none',
                // caretColor: this.cursorSwitches.carot ? '' : 'transparent',
                // zIndex: '2',
            // }
        // }
    // },
    methods: {
        keydown() {
            setTimeout(() => {
                const start = this.input.selectionStart
                // const end = this.input.selectionEnd
                this.mirror.innerHTML = this.input.value.substr(0, start).replace(/ /g, '.')
                const rects = this.input.getClientRects()
                const lastRect = rects[rects.length - 1]
                console.log(lastRect)
                this.style.cursor.left = 2 + lastRect.width + "px"
            }, 0)
        },
        focus() {
            this.focused = true
            this.blink = true
            this.blinkInterval = setInterval(() => { this.blink != this.blink }, 535)
        },
        blur() {
            this.focused = false
            clearInterval(this.blinkInterval)
        },
    },
    // mounted() {}
}
</script>
