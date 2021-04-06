<template>
    <div :style="styles.container">
        <div :style="styles.main">
            <d-logo height="100px" href="/" src="/images/Art-Revo-met-Kenmerk-Logo.png" alt="Art Revo Logo" />
            <div :style="styles.links">
                <router-link v-for="link in headerlinks" :to="link.path" :style="styles.linky">{{ link.name }}</router-link>
            </div>
            <router-link to="/login">Auth</router-link>
            <span>{{ breakpoint }}</span>
        </div>
    </div>
</template>

<script>
import routes from '@/router/routes.js'
import { inject } from 'vue'

export default {
    setup() {
        const breakpoint = inject('breakpoint')
        const headerlinks = routes.main
        return { headerlinks, breakpoint }
    },
    data() {
        return {
            styles: {
                container: {
                    position: 'relative',
                    backgroundColor: '#ffffff',
                },
                main: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 'auto',
                    height: '116px',
                    maxWidth: '1140px',
                },
                img: {
                    height: '100px',
                },
                links: {
                    display: 'flex',
                },
                linky: {
                    textDecoration: 'none',
                    padding: '25px',
                    backgroundColor: 'yellow',
                    margin: '10px',
                    color: 'black',
                },
                add: {
                    padding: '25px',
                    border: '1px solid black',
                },
                auth: {
                }
            }
        }
    },
}
</script>
