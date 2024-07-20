<script setup lang="ts">
import styled from 'vue3-styled-components';
import { WButtonProps } from './interface';
import { wButtonSize, wButtonStyle } from './config';
const props = defineProps<WButtonProps>();
const style = wButtonStyle[props.variant];
const size = wButtonSize[props.size];

const WButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: auto;
    min-width: ${() => size.minWidth};
    height: ${() => size.height};
    border-radius: ${() => size.borderRadius};
    color: ${() => style.color};
    background-color: ${() => style.backgroundColor};
    border: ${() => style.border ?? 'none'};
    padding: ${() => size.padding};
    cursor: pointer;
    &:hover {
        color: ${() => style.hover.color};
        background-color: ${() => style.hover.backgroundColor};
        border: ${() => style.hover.border ?? 'none'};
    }
    &:disabled {
        color: ${() => style.disabled.color};
        background-color: ${() => style.disabled.backgroundColor};
        border: ${()=> style.disabled.border ?? 'none'};
        cursor: not-allowed;
    }
`
</script>
<template>
    <WButton>
        <slot></slot>
    </WButton>
</template>