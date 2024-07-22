<script setup lang="ts">
import { css } from '@emotion/css';
import { blue, gray } from '@lib/Color/config';

const className = css({
    appearance: 'none',
    position: 'relative',
    borderRadius: '20px',
    width: '32px',
    height: '20px',
    background: gray[500],
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '14px',
        height: '14px',
        top: '3px',
        left: '3px',
        borderRadius: '35px',
        background: gray['white'],
        // transition: '.5s'
    },
    '&:checked': {
        backgroundColor: blue[700],
        '&:after': {
            left: '15px'
        }
    }
});
</script>
<template>
    <input type="checkbox" :class="className"></input>
</template>