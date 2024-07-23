<script setup lang="ts">
import { css } from '@emotion/css';
import { icon } from './config'
import { IconProps } from './interface';
import { color } from '@lib/Color/config';
import { computed } from 'vue';
const props = defineProps<IconProps>();

const dList = computed(() => icon[props.icon]);
const width = props.width ?? '24px';
const height = props.height ?? '24px';
const svgClassName = css({
    width: width,
    height: height
});
const pathClassName = computed(() => {
    return css({
        fill: color[props.color],
    });
})
</script>
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="svgClassName"
    >
        <path  fill-rule="evenodd" clip-rule="evenodd" v-for="d in dList" :d="d" :class="pathClassName"/>
    </svg>
</template>