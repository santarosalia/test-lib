<script setup lang="ts">
import { WButtonProps } from './interface';
import { blue } from '../Color';

defineProps<WButtonProps>();

</script>
<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: v-bind('blue[700]');
  width: 250px;
  height: 50px;
  border-radius: 6px;
  border: none;
  &:hover {
    background-color: #0341A3;
  }
  &:disabled {
    background-color: #8FBFFF;
  }
}
</style>