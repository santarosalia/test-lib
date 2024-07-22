<script setup lang="ts">
import {css} from '@emotion/css'
import { ButtonProps } from './interface';
import { buttonSize, buttonVariant } from './config';
const props = defineProps<ButtonProps>();
const variant = buttonVariant[props.variant];
const size = buttonSize[props.size];
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
const variantClassName = css(variant);
const sizeClassName = css(size);
</script>
<template>
    <button :class="[baseClassName, variantClassName, sizeClassName]">
        <slot></slot>
    </button>
</template>