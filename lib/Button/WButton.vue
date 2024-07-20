<script setup lang="ts">
import {css} from '@emotion/css'
import { WButtonProps } from './interface';
import { wButtonSize, wButtonStyle } from './config';
const props = defineProps<WButtonProps>();
const style = wButtonStyle[props.variant];
const size = wButtonSize[props.size];
const g = css(style, size);
</script>
<template>
    <button :class="g">
        <slot></slot>
    </button>
</template>