<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';
import { TextareaProps } from './interface';
import { computed } from 'vue';
import { typography } from '@lib/Typography/config';

const props = defineProps<TextareaProps>();
const containerClassName = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
});

const baseClassName = computed(()=> {
    return css({
        color: color.gray1100,
        height: '20px',
        padding: '8px 10px',
        border: `1px solid ${props.error ? color.red600 : color.gray400}`,
        borderRadius: '4px',
        ':focus': {
            borderColor: color.blue600,
            outline: 'none'
        },
        ':disabled': {
            color: color.gray700,
            backgroundColor: color.gray300
        },
    });
});

const msgClassName = computed(() => {
    return css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 4px',
        color: props.error? 'red' : color.gray800
    }, typography['body6']);
});
const model = defineModel<string>();
</script>
<template>
    <div :class="containerClassName">
        <textarea :class="baseClassName" v-bind="$attrs" v-model="model"></textarea>
        <span :class="msgClassName">
            <span>{{ props.msg }}</span>
            <span v-if="showCount && $attrs.maxlength">
                {{ model ? model.length : 0 }} / {{ $attrs.maxlength }}
            </span>
        </span>
    </div>
</template>