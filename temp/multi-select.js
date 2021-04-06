/**
 * @typedef {Object<string,any>} Option
 */

import {computed} from 'vue';
import {defineComponent, h, ref} from 'vue';

export const MultiSelect = defineComponent({
    name: 'minimal-multiselect',
    props: {
        valueField: {
            type: String,
            required: false,
            default: 'id',
        },
        textField: {
            type: String,
            required: false,
            default: 'name',
        },
        options: {
            /** @type {import('@vue/runtime-core').PropType<Option[]>} */
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: '',
        },
        modelValue: {
            /** @type {import('@vue/runtime-core').PropType<any[]>} */
            type: Array,
            required: true,
        },
        addable: {
            type: Boolean,
            required: false,
            default: true,
        },
        noResults: {
            type: String,
            required: false,
            default: 'Option not found, press enter to add',
        },
        optionsLimit: {
            type: Number,
            required: false,
            default: 1000,
        },
    },
    emits: ['update:modelValue'],

    setup(props, {emit}) {
        const search = ref('');
        const dropDownEnabled = ref(false);

        const filteredOptions = computed(() => {
            const selectedAmount = props.modelValue.length;
            if (!search.value && !selectedAmount) return props.options.slice(0, props.optionsLimit);
            const find = search.value.toLowerCase();

            return props.options.reduce(
                /**
                 * @param {Object[]} acc
                 * @param {any} option
                 */ (acc, option) => {
                    if (acc.length >= props.optionsLimit) return acc;
                    if (find && option[props.textField].toLowerCase().indexOf(find) === -1) return acc;
                    if (selectedAmount && props.modelValue.indexOf(option[props.valueField]) !== -1) return acc;
                    acc.push(option);
                    return acc;
                },
                []
            );
        });

        const clearDropDown = () => {
            dropDownEnabled.value = false;
            search.value = '';
        };

        /** @param {Option} option */
        const pickOption = option => {
            emit('update:modelValue', [...props.modelValue, option[props.valueField]]);
            clearDropDown();
        };

        const addOption = () => {
            if (!props.addable) return;
            // If the option is already added, don't add it again
            if (props.modelValue.findIndex(option => option[props.textField] === search.value) !== -1) return;
            emit('update:modelValue', [...props.modelValue, {[props.textField]: search.value}]);
            clearDropDown();
        };

        /** @param {any} optionValue */
        const removeOption = optionValue => {
            emit(
                'update:modelValue',
                props.modelValue.filter(v => v !== optionValue)
            );
            clearDropDown();
        };

        const inputEnter = () => {
            const filteredOptionsLength = filteredOptions.value.length;

            if (!filteredOptionsLength) return addOption();
            if (filteredOptionsLength === 1) return pickOption(filteredOptions.value[0]);
        };

        const toggleDropDown = () => {
            if (dropDownEnabled.value) return clearDropDown();
            dropDownEnabled.value = true;
        };

        return {
            filteredOptions,
            pickOption,
            addOption,
            removeOption,
            inputEnter,
            dropDownEnabled,
            search,
            clearDropDown,
            toggleDropDown,
        };
    },
    render() {
        const select = h('div', {class: 'multiselect__select', onClick: this.toggleDropDown});

        const tagsWrap = h('div', {class: 'multiselect__tags-wrap'}, [
            this.modelValue.map(optionValue => {
                const option = this.options.find(option => option[this.valueField] === optionValue);
                const optionText = option ? option[this.textField] : optionValue[this.textField];

                // using optionText as key, big assumption that those are unique
                return h('span', {class: 'multiselect__tag', key: optionText}, [
                    h('span', [optionText]),
                    h('i', {
                        class: 'multiselect__tag-icon',
                        'aria-hidden': 'true',
                        onMousedown: () => this.removeOption(optionValue),
                    }),
                ]);
            }),
        ]);

        const searchField = h('input', {
            class: 'multiselect__input',
            placeholder: this.placeholder,
            value: this.search,
            style: this.dropDownEnabled ? 'width:100%;' : 'width: 0px; position:absolute; padding:0px;',
            onInput: /** @param {import('../../types').CustomTargetEvent<HTMLInputElement>} event */ event =>
                (this.search = event.target.value),
            onKeypress: /** @param {KeyboardEvent} event */ event => {
                if (event.key === 'Enter') {
                    // keyCode 13 is enter key
                    event.preventDefault();
                    this.inputEnter();
                }
            },
        });

        if (this.dropDownEnabled) {
            this.$nextTick(() => {
                if (!searchField.el) return;
                // TODO :: find a way to make this work gracefully
                if (!this.search) searchField.el.value = '';
                // TODO :: find a way to focus only on opening
                searchField.el.focus();
            });
        }

        const tagChildren = [tagsWrap, searchField];

        if (!this.dropDownEnabled && !this.modelValue.length) {
            tagChildren.push(h('span', {class: 'multiselect__placeholder'}, [this.placeholder]));
        }

        const primary = h(
            'div',
            {
                class: 'multiselect__tags',
                onClick: () => (this.dropDownEnabled = true),
                onFocusout: () => {
                    // TODO :: this does not work, should focus or blur somewhere else
                    setTimeout(this.clearDropDown, 200);
                },
            },
            tagChildren
        );

        const optionItems = this.filteredOptions.map(option =>
            h(
                'li',
                {
                    class: 'multiselect__element',
                    key: option[this.valueField],
                    onClick: () => this.pickOption(option),
                },
                [h('span', {class: 'multiselect__option'}, [option[this.textField]])]
            )
        );

        optionItems.push(
            h(
                'li',
                {
                    style: this.filteredOptions.length || !this.search ? 'display:none;' : 'cursor: pointer;',
                    onClick: () => this.addOption(),
                },
                [h('span', {class: 'multiselect__option'}, [this.noResults])]
            )
        );

        const options = h('ul', {class: 'multiselect__content', style: 'display:inline-block'}, optionItems);

        const optionsWrapper = h(
            'div',
            {
                class: 'multiselect__content-wrapper',
                style: this.dropDownEnabled ? 'max-height: 300px;' : 'max-height: 300px; display:none;',
            },
            [options]
        );

        return h(
            'div',
            {
                class: this.dropDownEnabled ? 'multiselect multiselect--active' : 'multiselect',
            },
            [select, primary, optionsWrapper]
        );
    },
});