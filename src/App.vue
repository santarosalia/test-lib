<script setup lang="ts">
import { WButton, WICon, WBadge } from "@lib";
import { blue } from "@lib";
import { ThemeProvider } from 'vue3-styled-components'
const theme = {
 
}
</script>

<template>
  <ThemeProvider :theme="theme">
  <div class="container">
    <div class="group">
      lg
      <WButton variant="filled" size="lg">Button</WButton>
      <WButton variant="filled" size="lg" disabled >f lg dsButton</WButton>
      <WButton variant="outlined" size="lg" >Button</WButton>
      <WButton variant="outlined" size="lg" disabled >Button</WButton>
      <WButton variant="gray" size="lg" >Button</WButton>
      <WButton variant="gray" size="lg" disabled >Button</WButton>
    </div>
    <div class="group">
      md
      <WButton variant="filled" size="md">Button</WButton>
      <WButton variant="filled" size="md" disabled >Button</WButton>
      <WButton variant="outlined" size="md" >Button</WButton>
      <WButton variant="outlined" size="md" disabled >Button</WButton>
      <WButton variant="gray" size="md" >Button</WButton>
      <WButton variant="gray" size="md" disabled >Button</WButton>
    </div>
    <div class="group">
      sm
      <WButton variant="filled" size="sm">Button</WButton>
      <WButton variant="filled" size="sm" disabled >Button</WButton>
      <WButton variant="outlined" size="sm" >Button</WButton>
      <WButton variant="outlined" size="sm" disabled >Button</WButton>
      <WButton variant="gray" size="sm" >Button</WButton>
      <WButton variant="gray" size="sm" disabled >Button</WButton>
    </div>
    <div>
      <WICon icon="arrowBottom" :color="blue[500]"/>
      <WButton variant="filled" size="md">
        <WICon icon="arrowBottom" :color="blue[500]"/>
        asd
      </WButton>
      <WButton variant="filled" size="md">
        asdasdasd
      </WButton>
      <WButton variant="filled" size="md">
        <WICon icon="arrowBottom" :color="blue[100]"/>
        asdasdasd
      </WButton>
    </div>
  </div>
  <div class="bgroup">
    <!-- <WBadge>Tddfff</WBadge> -->
  </div>
</ThemeProvider>
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
.bgroup {

}
button {
  margin: 5px;
}
</style>
