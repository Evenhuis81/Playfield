<template>
    <div :style="containerStyle">
        <input
            @focus="focused = !focused"
            @blur="focused = !focused"
            @mouseover="hovered = !hovered"
            @mouseleave="hovered = !hovered"
            :style="config('theme')"
            :placeholder="config('placeholder')"
        >
        <span :style="borderBottomStyle"></span>
        <span :style="borderTopStyle"></span>
        <span :style="borderLeftStyle"></span>
        <span :style="borderRightStyle"></span>
    </div>
</template>

<script>
export default {
    props: ['options'],
    data() {
        return {
            focused: false,
            hovered: false,
            containerStyle: {
                position: 'relative',
                width: '300px',
                margin: '10px'
            },
        }
    },
    computed: {
        inputStyle() {
            return {
                // '--placeholder-color': '#f00',
                // '--placeholder-paddingleft': this.focused ? '20px' : '',
                // '--placeholder-opacity' : this.focused ? '0' : '',
                textIndent: '10px',
                width: '100%',
                padding: '10px 0',
                border: '1px solid',
                borderColor: this.focused ? 'transparent' : '#ccc',
                outline: this.focused ? 'none' : '',
                transition: '0.75s'
                
            }
        },
        borderBottomStyle() {
            let style = {
                position: 'absolute',
                bottom: '0',
                left: this.focused ? '0' : '',
                right: this.focused ? '' : '-2px',
                width: this.focused ? '100%' : '0',
                height: '2px',
                backgroundColor: '#27ad8a',
                transition: '0.4s linear',
            }
            // return style
        },
        borderTopStyle() {
            let style = {
                position: 'absolute',
                top: '0',
                left: this.focused ? '' : '0',
                right: this.focused ? '-2px' : '',
                width: this.focused ? '100%' : '0',
                height: '2px',
                backgroundColor: '#27ad8a',
                transition: '0.4s linear',
                transitionDelay: '0.65s'
            }
            // return style
        },
        borderLeftStyle() {
            let style = {
                left: '0',
                position: 'absolute',
                top: this.focused ? '0' : '',
                bottom: this.focused ? '' : '0',
                height: this.focused ? '100%' : '0',
                width: '3px',
                backgroundColor: '#27ad8a',
                transition: '0.25s linear',
                transitionDelay: '1.05s'
            }
            // return style
        },
        borderRightStyle() {
            let style = {
                right: '-2px',
                position: 'absolute',
                top: this.focused ? '' : '0',
                bottom: this.focused ? '0' : '',
                height: this.focused ? '100%' : '0',
                width: '3px',
                backgroundColor: '#27ad8a',
                transition: '0.25s linear',
                transitionDelay: '0.4s'

            }
            // return style
        },
        allRoundCounter() {
            console.log('asdfff')
        }
    },
    methods: {
        config(parameter, options = this.options) {
            if (options) {
                if (parameter == 'theme') {
                    if (options[parameter]) {
                        // console.log('eesss')
                        return this.options[parameter]
                    }
                }
                if (options[parameter]) {
                    return options[parameter]
                }
            }
        },
    }
}
</script>

<style>
/* input::placeholder { */
    /* text-align: right; */
    /* color: var(--placeholder-color);
    padding-left: var(--placeholder-paddingleft);
    opacity: var(--placeholder-opacity);
    transition: all 1s ease-in-out; */
/* } */
</style>
