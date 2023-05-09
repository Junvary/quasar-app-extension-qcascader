<template>
    <q-select :dense="dense" v-model="modelLabel" :options="[{}]" :label="label" style="width: 50%;" clearable multiple
        @clear="handleClear">
        <template v-slot:selected>
            <span v-if="modelLabel" v-for="item in modelLabel">
                {{ item.label }}&nbsp;/&nbsp;
            </span>
            <template v-else />
        </template>
        <template v-slot:option="scope">
            <CascaderItem :dense="dense" :options="options" @handleSelect="handleSelect" :modelLabel="modelLabel" />
        </template>
    </q-select>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CascaderItem from './CascaderItem.vue'

export default defineComponent({
    name: "QCascader",
    components: {
        CascaderItem
    },
    props: {
        modelValue: {
            type: Array,
            required: false,
            default: () => []
        },
        options: {
            type: Array,
            required: false,
            default: () => []
        },
        dense: {
            type: Boolean,
            required: false,
            default: false
        },
        label: {
            type: String,
            required: false,
            default: ""
        }
    },
    setup(props, context) {
        const modelLabel = ref([])
        const selected = ref([])
        const handleSelect = (item, deep) => {
            if (deep === 0) {
                selected.value = [item]
            } else {
                selected.value[deep] = item
            }
            modelLabel.value = selected.value
            const valueList = []
            modelLabel.value.forEach(item => {
                valueList.push(item.value)
            })
            context.emit('update:modelValue', valueList)
        }
        const handleClear = (value) => {
            context.emit('update:modelValue', [])
        }
        const setModelLabel = (options, v) => {
            const getItem = options.filter(item => item.value === v)[0]
            modelLabel.value.push(getItem)
            return getItem.children || null
        }
        if (props.modelValue.length) {
            let children = []
            props.modelValue.forEach((v, i) => {
                if (i === 0) {
                    children = setModelLabel(props.options, v)
                } else {
                    if (children) {
                        children = setModelLabel(children, v)
                    }
                }
            })
        }

        return {
            modelLabel,
            handleSelect,
            handleClear,
        }
    },
})
</script>