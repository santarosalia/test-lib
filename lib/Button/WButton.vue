<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg?: string,
  nameList?: string[]
}>();

const count = ref(0);

</script>
<template>
  <div class="card">
    <button v-for="(name, i) in nameList" type="button" @click="count++">
      {{ `${name} ${i}` }} {{ msg }} {{ count }}
    </button>
  </div>
</template>

<style scoped>
button {
  color: #7e22ce;
}
</style>
