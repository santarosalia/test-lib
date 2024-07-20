<script setup lang="ts">
import {css} from '@emotion/css'
import { WButtonProps } from './interface';
import { wButtonSize, wButtonStyle } from './config';
const props = defineProps<WButtonProps>();
const style = wButtonStyle[props.variant];
const size = wButtonSize[props.size];
const className = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'not-allowed'
    },
    border: 'none'
},
style, size);
</script>
<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>