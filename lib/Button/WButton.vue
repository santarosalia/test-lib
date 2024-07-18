<script setup lang="ts">
import { WButtonProps } from '@lib/Button/interface';
import { computed } from 'vue';
import { WButtonSizeList, WButtonThemeList } from "./config";

const props = defineProps<WButtonProps>();

const buttonTheme = computed(() => WButtonThemeList.find(btn => btn.variant === props.variant)!);
const buttonSize = computed(() => WButtonSizeList.find(btn => btn.size === props.size)!);
</script>
<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: v-bind('buttonTheme.color');
  background-color: v-bind('buttonTheme.backgroundColor');
  width: auto;
  height: v-bind('buttonSize.height');
  border-radius: v-bind('buttonSize.borderRadius');
  border: v-bind('buttonTheme.border ?? "none"');
  cursor: pointer;
  padding: 4px 12px;
  &:hover {
    color: v-bind('buttonTheme.hover.color');
    background-color: v-bind('buttonTheme.hover.backgroundColor');
    border: v-bind('buttonTheme.hover.border ?? "none"');
  }
  &:disabled {
    color: v-bind('buttonTheme.disable.color');
    background-color: v-bind('buttonTheme.disable.backgroundColor');
    border: v-bind('buttonTheme.disable.border ?? "none"');
    cursor: not-allowed;
  }
}
</style>