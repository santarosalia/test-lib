<script setup lang="ts">
import { ref } from 'vue'

defineProps({
      msg: { type: String },
      type: { type: String }
    }
)

const count = ref(0)
</script>
<template>
  <div class="card">
    <button type="button" @click="count++">
      {{ msg }} {{ count }}
    </button>
  </div>
</template>

<style scoped>
button {
  color: #7e22ce;
}
</style>
