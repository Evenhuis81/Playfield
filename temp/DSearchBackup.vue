<template>
    <!-- make elements dynamic, but with a default, through config file -->
    <b-nav-form style="position: relative" v-on:submit.prevent="">
        <!-- small arrow or info tooltip (arrow for settings, about, legend, etc, info tooltip for legend ea) -->
        <!-- add key up and down functionality (see autoComplete.vue) -->
        <!-- make optional autocomplete without list (prefill value, submit on enter) -->
        <b-form-input
            v-model="input"
            @focus="handleFocus"
            @focusout="handleFocusOut"
            @keyup.esc="$event.target.blur()"
            @keyup.down="keyDown"
            @keyup.up="keyUp"
            @update="inputChange()"
            tabindex="0"
            class="mr-sm-2 border-0 bg-light"
            style="width: 250px"
            autocomplete="off"
        />

        <!-- make optional / default or named slot -->
        <transition name="fade">
            <div v-if="showList" :style="inputStyle">
                <li v-if="fetching">Bezig met zoeken...</li>
                <div v-else-if="filter" v-for="(users, role) in filter" :key="role">
                    <div v-for="(user, id, index) in users" :key="id">
                        <li
                            v-if="!index"
                            @mouseover="hover = true"
                            @mouseleave="hover = null"
                            class="font-italic text-center"
                            :style="{
                                background: dotStyleBg(role, '0.2'),
                                borderBottom: '1px dotted brown',
                                fontWeight: '500',
                            }"
                        >
                            {{ roleNL(role) }}:
                        </li>
                        <li
                            @mouseover="hover = id"
                            @mouseleave="hover = null"
                            @click="goTo(id, role)"
                            class="d-flex justify-content-between align-items-center"
                            :style="[listStyle, {background: hover === id ? dotStyleBg(role, '0.1') : ''}]"
                        >
                            <span :style="nameStyle">{{ user }}</span>
                            <span :style="[dotStyle, {background: dotStyleBg(role)}]"></span>
                        </li>
                    </div>
                </div>
                <li v-else>Geen resultaten</li>
            </div>
        </transition>
    </b-nav-form>
</template>

<script>
import {searchController} from '../controllers';

export default {
    // config:
    // theme, language, autocomplete-style (list or prefill), searchbutton/icon
    data() {
        return {
            results: false,
            focus: false,
            hover: null,
            input: '',
            index: null,
            fetching: false,
            inputStyle: {
                position: 'absolute',
                zIndex: '1',
                overflow: 'auto',
                maxHeight: '295px',
                top: '44px',
                background: 'white',
                border: '1px solid black',
                width: '250px',
            },
            dotStyle: {
                height: '10px',
                width: '10px',
                borderRadius: '10px',
                marginLeft: 'auto',
                marginRight: '10px',
            },
            nameStyle: {
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                marginLeft: '10px',
                marginRight: '10px',
            },
            listStyle: {
                borderBottom: '1px dotted brown',
                cursor: 'pointer',
                transitionProperty: 'background',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'linear',
            },
        };
    },
    computed: {
        showList() {
            if (!this.input || !this.focus) return false;
            return true;
        },
        filter() {
            // On method, it runs twice, why?
            const input = this.input.trim().toLowerCase();
            if (input && this.index) {
                let results = [];
                let index = {
                    ...this.index,
                };
                Object.keys(index).map(function (key) {
                    let index2 = {
                        ...index[key],
                    };
                    Object.keys(index2).map(function (key2) {
                        if (!index2[key2].trim().toLowerCase().includes(input)) {
                            delete index2[key2];
                        }
                    });
                    if (Object.keys(index2).length) results.push('insert something here that no one will ever read');
                    index[key] = index2;
                });
                return results.length ? index : null;
            }
        },
    },
    methods: {
        keyDown() {
            //
        },
        keyUp() {
            //
        },
        roleNL(role) {
            if (role === 'clients') return 'deelnemers';
            if (role === 'customers') return 'klanten';
            if (role === 'users') return 'begeleiders';
        },
        dotStyleBg(role, opacity) {
            // why doesn't this work?:
            // if (role === 'clients') return 'rgb(0, 277, 150, ' + opacity ? opacity : '1' + ')';

            // this can be more efficient
            if (opacity) {
                if (role === 'clients') return 'rgb(0, 277, 150, ' + opacity + ')';
                if (role === 'customers') return 'rgb(254, 176, 25, ' + opacity + ')';
                if (role === 'users') return 'rgb(255, 255, 34, ' + opacity + ')';
            }
            // make dynamic eventually
            if (role === 'clients') return 'rgb(0, 277, 150)';
            if (role === 'customers') return 'rgb(254, 176, 25)';
            if (role === 'users') return 'rgb(255, 255, 34)';
        },
        inputChange() {
            if (!this.index && !this.fetching) {
                this.fetchIndex();
                return;
            }
            // Fail-safe in case of user typing while index is being fetched
            if (this.fetching) return;
            this.filter;
        },
        fetchIndex() {
            this.fetching = true;
            searchController
                .read()
                .then(response => {
                    this.index = response.data;
                    this.fetching = false;
                    this.filter;
                    return;
                })
                .catch(error => {
                    console.log('errorFetching');
                    this.fetching = false;
                    return;
                });
        },
        submit(filter) {
            // combine with goTo to make 1 submitHandler for parent
            // Search show page with results ?
            // How to handle submit if no results ?
        },
        goTo(id, role) {
            this.$emit('go-to', id, role);
            this.resetInput();
            return;
            // make failsafe if item clicked with wrong data / errorHandler
        },
        resetInput() {
            this.input = '';
            this.focus = false;
            this.hover = null;
        },
        handleFocusOut() {
            if (this.hover) return;
            this.focus = false;
        },
        handleFocus() {
            this.focus = true;
        },
    },
};
</script>

<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 0.5s;
}
/* .fade-leave {
} */
.fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}
</style>
