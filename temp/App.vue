<template>
    <d-app>
        <d-header></d-header>
        <button @click="goTo('/')">Go To Home</button>
        <button @click="goTo('/about')">Go To About</button>
        <!-- <d-router-view></d-router-view> -->
        <router-view></router-view>
    </d-app>
</template>

<script>
import { push } from "@/history";

export default {
    methods: {
        goTo(route) {
            push(route);
        }
    }
}
</script>