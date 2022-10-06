<template>
    <q-select :dense="dense" v-model="model" :options="[{}]" :label="label" clearable style="width: 50%;">
        <template v-slot:option="scope">
            <CascaderItem :dense="dense" :options="options" @handleSelect="handleSelect" />
        </template>
    </q-select>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CascaderItem from './CascaderItem'

export default defineComponent({
    name: "QCascader",
    components: {
        CascaderItem
    },
    props: {
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
    setup() {
        return {
            model: ref(null)
        }
    },
    methods: {
        handleSelect(item) {
            this.model = item.value
        }
    }
})
</script>