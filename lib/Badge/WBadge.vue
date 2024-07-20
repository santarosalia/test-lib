<script setup lang="ts">
    import { css } from '@emotion/css';
    const className = css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: '50px',
        color: 'white',
        minHeight:'13px',
        minWidth: '3px',
        padding: '1px 6px',
        fontSize: '12px',
        fontWeight: '500',
    });
       
</script>
<template>
    <span :class="className">
        <slot></slot>
    </span>
</template>