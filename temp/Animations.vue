<template>
  <div class="home">
    <section>
      <button @click="bounce = !bounce">Bounce</button>
      <br>
      <transition name="bounce">
      <img v-if="bounce" src="logo.png" alt="Vue Logo">
      </transition>
    </section>
    <section>
      <button @click="roll = !roll">Roll</button>
      <br>
      <transition name="roll">
      <img v-if="roll" src="logo.png" alt="Vue Logo">
      </transition>
    </section>
    <section>
      <button @click="animate = !animate">Animate</button>
      <br>
      <transition name="animate" enter-active-class="animate__animated animate__flipInY" leave-active-class="animate__animated animate__zoomOutRight">
      <img v-if="animate" src="logo.png" alt="Vue Logo">
      </transition>
    </section>
  </div>
</template>

<script>

export default {
    data: () => ({
      bounce: false,
      roll: false,
      animate: false,
    }),
    computed: {},
    methods: {},
    mounted() {},
}
</script>

<style>
section {
  min-height: 400px;
}
.bounce-enter-active {
  animation: bounce-in .5s
}
.bounce-leave-active {
  animation: bounce-in .5s reverse
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.roll-enter-active {
  animation: roll-in .5s;
}
.roll-leave-active {
  animation: roll-in .5s reverse
}

@keyframes roll-in {
  0% {
    transform: scale(0) rotateZ(0deg) translateX(-250px);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(1) rotateZ(360deg) translateX(0px);
    /* opacity: 1; */
  }
}
</style>