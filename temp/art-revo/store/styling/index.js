import {reactive, readonly } from "vue"

let height = 100

const headerStyle2 = reactive({
    position: 'relative',
    height: height + 'px',
    backgroundColor: '#ffffff',
    // borderBottom: '2px solid #000000',
})

const container = {
    // position: 'relative',
    // height: '116px',
    // display: 'flex',
    // justifyContent: 'space-between',
    // width: '100%',
    // margin: 'auto',
}

const header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    height: '116px',
    margin: 'auto',
    // paddingRight: '20px',
}

const links = {
    // float: 'left',
    // marginTop: '10px',
}

const imag = {
    maxHeight: '50px',
    // width: 'auto,'
}

function changeThat() {
    height += 100
    header.height = height + 'px'
}
// const activate = function (value, left, top, active) {
//   state.value = value
//   state.left = left
//   state.top = top
//   state.active = active
// }

export default { imag, links, container, header, changeThat }
