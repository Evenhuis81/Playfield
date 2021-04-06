import axios from 'axios'
import { makeTree } from '../../constants';

export default {
    namespaced: true,
    state: () => ({
        categories: null,
    }),
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        removeCategory(state, id) {

            const removeIndex = state.categories.map(item => item.id)
                       .indexOf(id);

            state.categories.splice(removeIndex, 1);
        },
        addCategory(state, payload) {
            state.categories.push(payload)
            // console.log(state.categories)
        }
    },
    actions: {
        getCategories({ commit }) {
            axios.get('/api/categories').then(response => {
                // const clone = JSON.parse(JSON.stringify(response.data));
                // const categories = makeTree(clone)
                commit('setCategories', response.data)
            })
        },
        createCategory({ commit }, payload) {
            // return axios.post('/api/categories', payload).then(response => {
            //     console.log(response.data)
            //     return 'aye'
            // }).catch(e => console.log('eeeee' , e))
            commit('addCategory', payload)
        },
        deleteCategory({ commit }, id) {
            return axios.delete('/api/categories/'+ id).then(response => {
                commit('removeCategory', id)
                return response.data
            })
        }
    },
    getters: {},
}
