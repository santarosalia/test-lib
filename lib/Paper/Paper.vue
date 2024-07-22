<script setup lang="ts">
import { css } from '@emotion/css';
import { blue, color, gray } from '@lib/Color/config';
import { typography } from '@lib/Typography/config';
import { PaperProps } from './interface';

const props = defineProps<PaperProps>();
const containerClassName = css({
    display: 'flex',
    borderRadius: '10px',
    flexDirection: 'column',
    border: `1px solid ${color.gray400}`,
    width: props.width,
    height: props.height
});

const headerClassName = css({
    padding: '8px 16px',
    backgroundColor: color.blue200,
    borderRadius: '10px 10px 0 0'
}, typography['subheader4']);

const bodyClassName = css({
    padding: '8px 16px',
});

</script>
<template>
<div :class="containerClassName">
    <div v-if="$slots.header" :class="headerClassName" >
        <slot name="header"></slot>
    </div>
    <div :class="bodyClassName">
        <slot></slot>
    </div>
</div>
</template>