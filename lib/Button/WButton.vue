<script setup lang="ts">
import {css} from '@emotion/css'
import { WButtonProps } from './interface';
import { wButtonSize, wButtonStyle } from './config';
const props = defineProps<WButtonProps>();
const style = wButtonStyle[props.variant];
const size = wButtonSize[props.size];
const baseClassName = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'not-allowed'
    },
    textWrap:'nowrap'
});
const styleClassName = css(style);
const sizeClassName = css(size);
</script>
<template>
    <button :class="[baseClassName, styleClassName, sizeClassName]">
        <slot></slot>
    </button>
</template>