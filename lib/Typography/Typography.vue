<script setup lang="ts">
import { css } from '@emotion/css';
import {typography} from './config'
import { TypographyProps } from './interface';
const props = defineProps<TypographyProps>();
const baseClassName = css(typography[props.level]);

</script>
<template>
    <span :class="baseClassName">
        <slot></slot>
    </span>
</template>