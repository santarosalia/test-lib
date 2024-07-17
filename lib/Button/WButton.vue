<script setup lang="ts">
import { WButton, WButtonProps } from './interface';
import { blue, gray } from '../Color';
import { computed, ref } from 'vue';

const props = defineProps<WButtonProps>();

const buttonList: WButton[] = [{
  variant: 'fullfilled',
  color: {
    enable: {
      text: gray['white'],
      background: blue[700]
    },
    hover: {
      text: gray['white'],
      background: blue[800]
    },
    disable: {
      text: gray['white'],
      background: blue[500]
    }
  }
},
{
  variant: 'outlined',
  color: {
    enable: {
      text: blue[700],
      background: gray['white']
    },
    hover: {
      text: gray['white'],
      background: blue[700]
    },
    disable: {
      text: gray['white'],
      background: blue[500]
    }
  }
}]

const button = computed(() => buttonList.find(btn => btn.variant === props.variant));

</script>
<template>
  <button type="button">
    {{ button.variant }}
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: v-bind('button.color.enable.text');
  background-color: v-bind('button.color.enable.background');
  width: 250px;
  height: 50px;
  border-radius: 6px;
  border: none;

  &:hover {
    color: v-bind('button.color.hover.text');
    background-color: v-bind('button.color.hover.background');
  }
  &:disabled {
    color: v-bind('button.color.disable.text');
    background-color: v-bind('button.color.disable.background');
  }
}
</style>