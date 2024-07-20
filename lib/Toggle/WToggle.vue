<script setup lang="ts">
import styled from 'vue3-styled-components';

const Switch = styled.input`
    display: flex;
    margin: 0;
    position: relative;
    cursor: pointer;
    width: 0;
    height: 0;
    background: blue;
    padding: 4px;
    outline: none;
    &::before {
        content: "";
        position: absolute;
        border-radius: 20px;
        width: 35px;
        height: 20px;
        background: gray;
    }
    &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        left: 5px;
        top: 5px;
        border-radius: 35px;
        background: white;
        transition: .5s
    }
    &:checked {
        &::before {
            background: blue;
        }
        &::after {
            background: white;
            transform: translate(15px)
        }
    }
`;
</script>
<template>
    <Switch type="checkbox"></Switch>
</template>