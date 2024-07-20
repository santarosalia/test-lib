<script setup lang="ts">
import { css } from '@emotion/css';
import { icon } from './config'
import { WIconProps } from './interface';
const props = defineProps<WIconProps>();

const d = icon[props.icon];
const color = props.color;
const width = props.width ?? '24px';
const height = props.height ?? '24px';
const svgCss = css({
    width: width,
    height: height
});
const pathCss = css({
    fill: color,
});
</script>
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="svgCss"
        
    >
        <path :d="d" :class="pathCss"/>
    </svg>
</template>