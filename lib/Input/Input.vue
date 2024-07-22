<script setup lang="ts">
import { css } from '@emotion/css';
import { blue, gray } from '@lib/Color/config';
import { InputProps } from './interface';
import { computed, InputHTMLAttributes, reactive, ref, useAttrs, useSlots } from 'vue';
import { typography } from '@lib/Typography/config';

const props = defineProps<InputProps>();
const containerClassName = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
});

const baseClassName = computed(()=> {
    return css({
        color: gray[1100],
        height: '20px',
        padding: '8px 10px',
        border: `1px solid ${props.error ? 'red' : gray[400]}`,
        borderRadius: '4px',
        ':focus': {
            borderColor: blue[600],
            outline: 'none'
        },
        ':disabled': {
            color: gray[700],
            backgroundColor: gray[300]
        },
    });
});

const msgClassName = computed(() => {
    return css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 4px',
        color: props.error? 'red' : gray[800]
    }, typography['body6']);
});
const model = defineModel<string>();
</script>
<template>
    <div :class="containerClassName">
        <input :class="baseClassName" v-bind="$attrs" v-model="model">
        <span :class="msgClassName">
            <span>{{ props.msg }}</span>
            <span v-if="showCount">
                {{ model ? model.length : 0 }} / {{ $attrs.maxlength}}
            </span>
        </span>
    </div>
</template>