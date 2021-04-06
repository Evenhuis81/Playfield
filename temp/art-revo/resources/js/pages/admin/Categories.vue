<template>
    <div style="display: flex">
        <div style="flex: 50%">
            <categories-tree v-if="categories" :data="categories" @selected="setNode" @crea="makeCat" />
            <!-- <input type="text"> -->
        </div>
        <div style="flex: 50%">
            <div v-if="selectedNode">
                <span style="font-weight: 900">{{ selectedNode.name.toUpperCase() }}</span>
                <div v-if="!editMode">
                    <button @click="editMode = !editMode">Edit</button>
                    <button @click="remove(selectedNode.id)">Remove</button>
                </div>
                <div v-else>EditMode<span @click="editMode = !editMode">cancel edit</span></div>
                <div v-if="message.active">{{ message.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const message = reactive({
            active: false,
            description: 'can\'t do that'
        })
        const editMode = ref(false)
        const selectedNode = ref(null)
        const setNode = ({ node, children }) => {
            selectedNode.value = node
            selectedNode.value['children'] = children
        }
        const makeCat = () => {
            // console.time('A')
            const neew = {
                id: 16,
                name: 'This is a new category',
                parent_id: 0,
            }
            store.dispatch('categories/createCategory', neew).then(response => {
                // console.timeEnd('A')
                // console.log(response)
            })
        }

        const remove = nodeId => {
            if (selectedNode.value.children) {
                message.active = true
                setTimeout(() => { message.active = false }, 5000)
                return
                }
                // console.time('A')
            store.dispatch('categories/deleteCategory', nodeId).then(response => {
                // console.timeEnd('A')
                // console.log(response)
            })
        }

        return {
            categories: computed(() => store.state.categories.categories),
            message,
            makeCat,
            editMode,
            setNode,
            remove,
            selectedNode,
        }
    }
}
</script>
