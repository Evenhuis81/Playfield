<template>
    <div :style="carousel.container">
        <div :style="carousel.slide" v-if="showImages">
            <img v-for="slide in slides" :src="slide.src" :alt="slide.alt">
        </div>
    </div>

    <button>Prev</button>
    <button>Next</button>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        slides: Array,
    },
    setup(props) {
        const showImages = ref(false)

        props.slides.forEach((slide, index) => {
            let img = new Image
            img.src = slide.src
            if(props.slides.length == index+1) img.onload = () => showImages.value = true
        })

        return { showImages }
    },
    data()  {
        return {
            styl: {
                opacity: '0',
                transition: 'all 1s linear'
            },
            slider: [],
            carousel: {
                container: {
                    width: '60%',
                    margin: 'auto',
                    // overflow: 'hidden',
                    border: '5px solid black',
                },
                slide: {
                    display: 'flex',
                    width: '100%',
                    // height: '500px',
                }
            }
        }
    },
    methods: {
        loadDone(event) {
            console.log(event)
            this.styl.opacity = '1'
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>