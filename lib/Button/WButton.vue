<script setup lang="ts">
import { WButtonProps } from '@lib/Button/interface';
import { computed, ref } from 'vue';
import { WButtonThemeList } from "./config";

const props = defineProps<WButtonProps>();

const buttonTheme = computed(() => WButtonThemeList.find(btn => btn.variant === props.variant)!);

</script>
<template>
  <button type="button">
    {{ buttonTheme.variant }}
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: v-bind('buttonTheme.color.enable.text');
  background-color: v-bind('buttonTheme.color.enable.background');
  width: 250px;
  height: 50px;
  border-radius: 6px;
  border: none;

  &:hover {
    color: v-bind('buttonTheme.color.hover.text');
    background-color: v-bind('buttonTheme.color.hover.background');
  }
  &:disabled {
    color: v-bind('buttonTheme.color.disable.text');
    background-color: v-bind('buttonTheme.color.disable.background');
  }
}
</style>