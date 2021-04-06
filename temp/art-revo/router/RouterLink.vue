<template>
    <button @click="$pushRoute(to)"><slot></slot></button>
</template>

<script>
import { push } from '@/router/history.js'

export default {
    props: ['to'],
    setup(props) { return { goTo: () => push(props.to) }}
}
</script>
