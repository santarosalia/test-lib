<script setup lang="ts">
import { icon } from './config'
import { WIconProps } from './interface';
const props = defineProps<WIconProps>();

const d = icon[props.icon];
const color = props.color;
const width = props.width ?? '24px';
const height = props.height ?? '24px';

</script>
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="width"
        :height="height"
    >
        <path :d="d" :fill="color"/>
    </svg>
</template>