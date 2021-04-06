<template>
    <div :style="container">
        <input
            @focus="focused()"
            @blur="blurred()"
            @mouseenter="mouseEntered()"
            @mouseleave="mouseLeft()"
            placeholder="Placeholder"
            :style="input"
        >
        <!-- <span :style="borderBottom"></span> -->
        <!-- <span :style="borderTop"></span>
        <span :style="borderLeft"></span>
        <span :style="borderRight"></span> -->
    </div>
</template>

<script>
export default {
    data: () => ({
        container: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // left: '50%',
            // top: '50%',
            // margin: 'auto',
            width: '100%',
            height: '100%',
        },
        input: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // boxSizing: 'border-box',
            // position: 'absolute',
            // left: '50%',
            // top: '50%',
            outline: 'none',
            fontSize: '20px',
            // width: '100%',
            // margin: 'auto',
            height: '4px',
            width: '4px',
            // padding: '10px 0',
            // borderRadius: '3px',
            // '--placeholder-paddingleft': '200px',
            '--placeholder-textindent': '-120px',
            border: '1px solid rgba(0,0,0, 1)',
            // border: '1px solid rgba(0,0,0, 0.2)',
            transition: 'all 0.25s linear',
            // transition: ''
        }
    }),
    computed: {
        // container() {
            // return {
                // position: 'relative',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100%',
                // width: '300px',
                // top: '50%',
                // left: '50%',
                // transform: 'translate(-50%, -50%)',
            // }
        // },
        // input() {
            // return {
                // color: 'transparent',
                // '--placeholder-color': '#f00',
                // '--placeholder-paddingleft': '20px',
                // '--placeholder-opacity' : '1',
                // textIndent: '10px',
                // textAlign: 'center',
                // caretColor: 'transparent',
                // pointerEvents: 'none',
                // width: '100%',
                // height: '100%',
                // padding: '10px 0',
                // border: '1px solid',
                // borderColor: 'transparent',
                // outline: 'none',
                // transition: '2.0s linear'
            // }
        // },
        borderBottom() {
            return {
                position: 'absolute',
                // bottom: '0',
                left: '0',
                // padding-right: '-40%',
                width: '100%',
                height: '2px',
                // backgroundColor: '#27ad8a',
                backgroundColor: 'black',
                // transition: '0.4s linear',
            }
        // },
        // borderTop() {
        //     return {
        //         position: 'absolute',
        //         // top: '0',
        //         // left: '',
        //         // right: '-2px',
        //         width: '100%',
        //         height: '2px',
        //         backgroundColor: '#27ad8a',
        //         transition: '0.4s linear',
        //         transitionDelay: '0.65s'
        //     }
        // },
        // borderLeft() {
        //     return {
        //         // left: '0',
        //         position: 'absolute',
        //         // top: '0',
        //         // bottom: '',
        //         height: '100%',
        //         width: '3px',
        //         backgroundColor: '#27ad8a',
        //         transition: '0.25s linear',
        //         transitionDelay: '1.05s'
        //     }
        // },
        // borderRight() {
        //     return {
        //         // right: '-2px',
        //         position: 'absolute',
        //         // top: '',
        //         // bottom: '0',
        //         height: '100%',
        //         // width: '3px',
        //         backgroundColor: '#27ad8a',
        //         transition: '0.25s linear',
        //         transitionDelay: '0.4s'
        //     }
        },
    },
    methods: {
        mouseEntered() {},
        mouseLeft() {},
        focused() {
            this.input.boxShadow = '0 0 5px rgba(0, 0, 255, 1)';
            this.input.border = '1px solid rgba(0, 0, 255, 0.8)';
        },
        blurred() {},
    },
    mounted() {
        // this.input.height = '100px'
        setTimeout(() => { this.input.height = '40px'}, 0)
        setTimeout(() => { this.input.width = '400px' }, 250);
        setTimeout(() => { this.input['--placeholder-textindent'] = '0px' }, 500);
        // setInterval(() => { this.borderColor = !this.borderColor}, 1001 )
    }
}
</script>

<style scoped>
input::placeholder {
    /* position: absolute; */
    padding: 10px;
    /* text-align: center; */
    /* top: 25%; */
    /* vertical-align: middle; */
    /* width: 1px; */
    /* color: var(--placeholder-color); */
    text-indent: var(--placeholder-textindent);
    /* left: var(--placeholder-left); */
    /* padding-left: var(--placeholder-paddingleft); */
    /* opacity: var(--placeholder-opacity); */
    transition: all 1s ease-in-out;
}
</style>