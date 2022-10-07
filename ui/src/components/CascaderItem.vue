<template>
    <q-list :dense="dense" style="min-width: 100px">
        <q-item v-for="item in options" clickable v-close-popup="!item.children || item.children.length === 0"
            @click="select(item, deep)" :active="model && model.indexOf(item) !== -1">
            <q-item-section>
                {{item.label}}
            </q-item-section>
            <q-item-section side v-if="item.children && item.children.length">
                <q-icon name="keyboard_arrow_right" />
            </q-item-section>
            <q-menu anchor="top end" self="top start" v-if="item.children && item.children.length">
                <CascaderItem :options="item.children" @handleSelect="select" :dense="dense" :deep="deep + 1"
                    :model="model" />
            </q-menu>
        </q-item>
    </q-list>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CascaderItem",
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
        deep: {
            type: Number,
            required: false,
            default: 0
        },
        model: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    methods: {
        select(item, deep) {
            this.$emit('handleSelect', item, deep)
        },
    }
})
</script>