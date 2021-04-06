<template>
    <nav :style="style.nav">
        <span style="width: 20%"></span>
        <div style="height: 85%; width: 15%;">
            <img src="/images/Art-Revo-met-Kenmerk-Logo.png" alt="Art Revo Logo" style="height: 100%;">
        </div>
        <ul style="display: flex; text-align: center; padding: 35px 0; background-color: #c2982a;">
            <li v-for="item in topNavItems" style="list-style: none; width: 101px; border: 1px solid black;">
                <a @visited="{ color: 'orange' }" class="lidd" :href="item.route" :style="style.links">{{ item.name }}</a>
            </li>
        </ul>
        <!-- <span style="width: 20%"></span> -->
    </nav>
</template>

<script>

export default {
    data: () => ({
        style: {
            nav: {
                display: 'flex',
                alignItems: 'center',
                height: '115px',  
            },
            link: {},
            links: {
                // color: 'rgb(0, 0, 0)',
                // textDecoration: 'none',
                letterSpacing: '0.5px',
                fontWeight: '900',
                /* lineHeight: '23', */
                fontFamily: 'Lato',
                // fontSize: '18px',
            }
        },
        topNavItems: [
            {
                name: 'Ho',
                route: '/vc'
            },
            {
                name: 'Home',
                route: '#'
            },
            {
                name: 'Meubels',
                route: '#'
            },
            {
                name: 'Schilderijen',
                route: '#'
            },
            {
                name: 'Accessoires',
                route: '#'
            },
            {
                name: 'Contact',
                route: '#'
            },
        ]
    }),
    methods: {
        visited() {
            console.log('yes')
        }
    }
}
</script>

<style>
.lidd {
    font-size: 30px;
}
/* .lidd:visited {
    color: orange;
} */
</style>
