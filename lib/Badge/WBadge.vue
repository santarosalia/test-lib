<script setup lang="ts">
    import styled from "vue3-styled-components";

    const WBadge = styled.span`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        border-radius: 50px;
        color: white;
        min-height:13px;
        min-width: 3px;
        padding: 1px 6px;
        font-size: 12px;
        font-weight: 500;
    `;
</script>
<template>
    <WBadge>
        <slot></slot>
    </WBadge>
</template>