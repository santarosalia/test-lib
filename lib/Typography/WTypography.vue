<script setup lang="ts">
import { css } from '@emotion/css';
import {pretendard} from './config'
import { WTypographyProps } from './interface';
const props = defineProps<WTypographyProps>();
const baseClassName = css(pretendard[props.level]);

</script>
<template>
    <span :class="baseClassName">
        <slot></slot>
    </span>
</template>