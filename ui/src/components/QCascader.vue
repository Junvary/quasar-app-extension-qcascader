<template>
    <q-select :dense="dense" v-model="model" :options="[{}]" :label="label" clearable style="width: 50%;" multiple>
        <template v-slot:selected>
            <span v-if="model" v-for="item in model">
                {{ item.label }}&nbsp;/&nbsp;
            </span>
            <template v-else />
        </template>
        <template v-slot:option="scope">
            <CascaderItem :dense="dense" :options="options" @handleSelect="handleSelect" :model="model" />
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
            model: ref(null),
            selected: ref([])
        }
    },
    methods: {
        handleSelect(item, deep) {
            if (deep === 0) {
                this.selected = [item]
            } else {
                this.selected[deep] = item
            }
            this.model = this.selected
        }
    }
})
</script>