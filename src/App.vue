<script setup lang="ts">
import { WButton } from "@lib";
import { ref } from "vue";

const d = ref(0);
</script>

<template>
  <WButton :msg="'asd'" variant="outlined" size="lg">{{ d }}</WButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
