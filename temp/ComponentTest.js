export default {
    name: 'form-error',
    functional: true,
    props: {
        errors: {
            type: String,
            required: false,
        },
    },
    render() {
        return this.$vm.h('h1', {}, 'asdf');
    },
};
