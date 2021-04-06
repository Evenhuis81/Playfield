import { reactive, readonly } from "vue"

// const state = reactive({
//     position: 'relative',
//     height: '100px',
//     backgroundColor: '#06F',
//     borderBottom: '2px solid #000000',
// });
const headerStyle = reactive({
    position: 'relative',
    height: '100px',
    backgroundColor: '#06F',
    borderBottom: '2px solid #000000',
})
function changeThat() {
    // window.alert('hi')
    headerStyle.height = '200px'
}
// const activate = function (value, left, top, active) {
//   state.value = value
//   state.left = left
//   state.top = top
//   state.active = active
// }

// export default { state: readonly(state) }
    // , activate };
export default { headerStyle, changeThat }
