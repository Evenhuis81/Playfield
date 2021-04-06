<template>
    <div style="position: relative; height: 30px; width: 250px">
        <input
        spellcheck="false"
        v-model="value"
        ref="input"
        @keyup="cursorMove()"
        @mousemove="mouseMoved()"
        @mousedown="mouseDowned()"
        @mouseenter="mouseEntered()"
        @mouseleave="mouseLeft()"
        @mouseup="mouseUpped()"
        @focus="focused()"
        @blur="blurred()"
        :style="[base, inputComputed]"
        >
        <div :style="[base, mirror]">
            <span id="demo" ref="span" :style="span"></span>
        </div>
        <div :style="[cursorData, cursorComputed]"></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        value: '',
        mouseEnter: false,
        mouseDown: false,
        focus: false,
        cursorSwitches: {
            active: false,
            carot: false,
            blink: false,
            blinkInterval: null,
        },
        base: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                font: '14px/1 monospace',
                // padding: '5px',
                border: '1px solid #999',
                whiteSpace: 'pre',
                margin: '0',
                background: 'transparent',
                width: '150px',
                height: '28px',
        },
        cursorData: {
            left: '5px',
        },
        mirror: {
            borderColor: 'transparent',
        },
        span: {
            maxWidth: '150px;',
            opacity: '0',
            border: '2px solid black',
            // wordWrap: 'break-word',
            // overflowWrap: 'break-word',
        },
    }),
    computed: {
        cursorComputed() {
            return {
                position: 'absolute',
                opacity: this.cursorSwitches.active ? '1' : '0',
                width: '8px',
                height:'2px',
                background: 'black',
                top: '22px',
                transition: this.cursorSwitches.active ? 'left 0.25s linear' : '',
            }
        },
        inputComputed() {
            return {
                outline: 'none',
                // caretColor: this.cursorSwitches.carot ? '' : 'transparent',
                zIndex: '2',
            }
        }
    },
    methods: {
        mouseEntered() {
            this.cursorSwitches.carot = false;
            this.mouseDown = false;
        },
        mouseLeft() {
            setTimeout(() => {
                if (this.mouseDown) {
                    this.cursorSwitches.active = false;
                    this.cursorSwitches.carot = true;
                }
            }, 0)
        },
        mouseDowned() {
            this.mouseDown = true;
            this.cursorMove();
        },
        mouseUpped() {
            this.mouseDown = false;
            this.cursorMove();
        },
        mouseMoved() {
            if (this.focus) {
                setTimeout(() => {
                    this.cursorSwitches.carot = false;
                    const input = this.$refs.input,
                    start = input.selectionStart,
                    end = input.selectionEnd;
                    if (start != end) {
                        this.cursorSwitches.active = false;
                    } else {
                        this.cursorSwitches.active = true;
                    }
                }, 0)
            }
        },
        cursorMove() {
            const input = this.$refs.input,
            span = this.$refs.span
            setTimeout(() => {
                const start = input.selectionStart;
                const end = input.selectionEnd;
                if (start != end) {
                    this.cursorSwitches.active = false;
                } else {
                    this.cursorSwitches.active = true;
                }
                span.innerHTML = this.value.substr(0, start).replace(/ /g, '.');
                const rects = span.getClientRects(),
                lastRect = rects[rects.length - 1],
                left = lastRect.width + 5,
                el = document.getElementById("demo");
                // if (left > this.base.width.substr(0, 3)) return;
                this.cursorData.left = lastRect.width + 5 + "px";
            }, 0)
        },
        focused() {
            this.focus = true;
            this.cursorSwitches.active = true;
            this.cursorSwitches.blinkInterval = setInterval(() => { this.cursorSwitches.blink =! this.cursorSwitches.blink }, 535);
        },
        blurred() {
            this.focus = false;
            this.cursorSwitches.active = false;
            clearInterval(this.cursorSwitches.blinkInterval);
        },
    },
    mounted() {
        // setTimeout(() => { this.cursor = false }, 1);
        // setInterval(() => { this.borderColor = !this.borderColor}, 1001 )
    }
}
</script>

<style scoped>
</style>
