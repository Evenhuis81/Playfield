<template>
  <nav>
      <div class="logo">
          <h4>The Nav</h4>
      </div>
      <ul class="nav-links" ref="navlinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Projects</a></li>
      </ul>
      <div class="burger" ref="burger" @click="navSlide()">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
      </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const burger = ref()
        const navlinks = ref()
        return { burger, navlinks }
    },
    methods: {
        navSlide() {
            this.navlinks.classList.toggle('nav-active');
        }
    }
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: #5d4954;
    font-family: 'Poppins', sans-serif;
}
.logo {
    color: rgb(226, 226, 226);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
}
.nav-links {
    display: flex;
    justify-content: space-around;
    width: 30%;
}

.nav-links li {
    list-style: none;
}
.nav-links a {
    color: rgb(226, 226, 226);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
}
.burger {
    display: none;
}
.burger div{
    width: 25px;
    height: 3px;
    background-color: rgb(226, 226, 226);
    margin: 5px;
}

@media screen and (max-width: 768px) {
    body {
        overflow-x: hidden;
    }
    .nav-links {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background-color: #504954;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
    }
    .nav-links li {{
        opacity: 0;
    }}
    .burger {
        display: block;
        cursor: pointer;
    }
}

@media screen and (max-width: 1024px) {
    .nav-links {
        width: 60%;
    }
}

.nav-active {
    transform: translateX(0%);
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translated(50px);
    }
    to {
        opacity: 1;
        transform: translated(0px);
    }
}
</style>
