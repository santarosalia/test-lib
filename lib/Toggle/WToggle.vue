<script setup lang="ts">
import { css } from '@emotion/css';

const className = css({
    appearance: 'none',
    position: 'relative',
    borderRadius: '20px',
    width: '35px',
    height: '20px',
    background: 'gray',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '10px',
        height: '10px',
        top: '5px',
        left: '5px',
        borderRadius: '35px',
        background: 'white',
        transition: '.5s'
    },
    '&:checked': {
        backgroundColor: 'blue',
        '&:after': {
            left: '20px'
        }
    }
});
</script>
<template>
    <input type="checkbox" :class="className"></input>
</template>