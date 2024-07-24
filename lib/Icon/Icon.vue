<script setup lang="ts">
import { css } from '@emotion/css';
import { iconData } from './config'
import { IconProps } from './interface';
import { color } from '@lib/Color/config';
import { computed } from 'vue';
const props = defineProps<IconProps>();

const dataList = computed(() => iconData[props.icon]);
const width = props.width ?? '24px';
const height = props.height ?? '24px';
const svgClassName = css({
    width: width,
    height: height
});
const pathClassName = computed(() => {
    return css({
        '& path' : {
            fill: color[props.color],
        }
    });
});
</script>
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="svgClassName"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" v-for="data in dataList" :d="data" :class="pathClassName"/>
    </svg>
</template>