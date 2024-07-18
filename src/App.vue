<script setup lang="ts">
import { WButton } from "@lib";
import { WICon } from "@lib"; 
import { blue } from "@lib";
</script>

<template>
  <div class="container">
    <div class="group">
      lg
      <WButton variant="fullfilled" size="lg">Button</WButton>
      <WButton variant="fullfilled" size="lg" disabled >f lg dsButton</WButton>
      <WButton variant="outlined" size="lg" >Button</WButton>
      <WButton variant="outlined" size="lg" disabled >Button</WButton>
      <WButton variant="gray" size="lg" >Button</WButton>
      <WButton variant="gray" size="lg" disabled >Button</WButton>
    </div>
    <div class="group">
      md
      <WButton variant="fullfilled" size="md">Button</WButton>
      <WButton variant="fullfilled" size="md" disabled >Button</WButton>
      <WButton variant="outlined" size="md" >Button</WButton>
      <WButton variant="outlined" size="md" disabled >Button</WButton>
      <WButton variant="gray" size="md" >Button</WButton>
      <WButton variant="gray" size="md" disabled >Button</WButton>
    </div>
    <div class="group">
      sm
      <WButton variant="fullfilled" size="sm">Button</WButton>
      <WButton variant="fullfilled" size="sm" disabled >Button</WButton>
      <WButton variant="outlined" size="sm" >Button</WButton>
      <WButton variant="outlined" size="sm" disabled >Button</WButton>
      <WButton variant="gray" size="sm" >Button</WButton>
      <WButton variant="gray" size="sm" disabled >Button</WButton>
    </div>
    <div>
      <WICon icon="arrowBottom" :color="blue[500]"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.group {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 20px;
}
button {
  margin: 5px;
}
</style>
