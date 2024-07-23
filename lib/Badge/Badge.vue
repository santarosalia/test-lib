<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';
const className = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue700,
    borderRadius: '50px',
    color: color.white,
    height:'20px',
    padding: '1px 6px',
});
       
</script>
<template>
    <span :class="className">
        <slot></slot>
    </span>
</template>