<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';

const className = css({
    appearance: 'none',
    position: 'relative',
    borderRadius: '20px',
    width: '32px',
    height: '20px',
    background: color.gray500,
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '14px',
        height: '14px',
        top: '3px',
        left: '3px',
        borderRadius: '35px',
        background: color.white,
        // transition: '.5s'
    },
    '&:checked': {
        backgroundColor: color.blue700,
        '&:after': {
            left: '15px'
        }
    }
});
</script>
<template>
    <input type="checkbox" :class="className"></input>
</template>