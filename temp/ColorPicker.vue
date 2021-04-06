<template>
    <div v-for="colordiv in colors" :style="[color, { backgroundColor: 'hsl('+colordiv.h+', 100%, 50%)', left: colordiv.h+'px' }]"></div>
</template>

<script>
export default {
    data: () => ({
        interval: null,
        h: 0,
        s: 0,
        l: 0,
        colors: [],
        color: {
            position: 'absolute',
            width: '1px',
            height: '50px',
        },
        container: {
            position: 'relative',
            height: '800px',
            width: '1000px',
        },
    }),
    computed: {},
    methods: {
        setColors(h,s,l) {
            // this.interval = setInterval(() => {
            //     this.colors.push({h,s,l})
            //     if (h++ === 360)  {
            //         clearInterval(this.interval);
            //     }
            // }, 1, h, s, l)
            for (h; h < 361; h++) {
                this.colors.push({h,s,l});
            }
        }
    },
    mounted() {
        this.setColors(this.h, this.s, this.l);
    }
}
</script>

<style>

</style>