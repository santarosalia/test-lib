<script setup lang="ts">
import { WButton, WICon, WBadge } from "@lib";
import { blue } from "@lib";
</script>

<template>
  <div class="container">
    <div class="group">
      lg
      <WButton variant="fulfilled" size="lg">Button</WButton>
      <WButton variant="fulfilled" size="lg" disabled >f lg dsButton</WButton>
      <WButton variant="outlined" size="lg" >Button</WButton>
      <WButton variant="outlined" size="lg" disabled >Button</WButton>
      <WButton variant="gray" size="lg" >Button</WButton>
      <WButton variant="gray" size="lg" disabled >Button</WButton>
    </div>
    <div class="group">
      md
      <WButton variant="fulfilled" size="md">Button</WButton>
      <WButton variant="fulfilled" size="md" disabled >Button</WButton>
      <WButton variant="outlined" size="md" >Button</WButton>
      <WButton variant="outlined" size="md" disabled >Button</WButton>
      <WButton variant="gray" size="md" >Button</WButton>
      <WButton variant="gray" size="md" disabled >Button</WButton>
    </div>
    <div class="group">
      sm
      <WButton variant="fulfilled" size="sm">Button</WButton>
      <WButton variant="fulfilled" size="sm" disabled >Button</WButton>
      <WButton variant="outlined" size="sm" >Button</WButton>
      <WButton variant="outlined" size="sm" disabled >Button</WButton>
      <WButton variant="gray" size="sm" >Button</WButton>
      <WButton variant="gray" size="sm" disabled >Button</WButton>
    </div>
    <div>
      <WICon icon="arrowBottom" :color="blue[500]"/>
      <WButton variant="fulfilled" size="md">
        <WICon icon="arrowBottom" :color="blue[500]"/>
        asd
      </WButton>
      <WButton variant="fulfilled" size="md">
        asdasdasd
      </WButton>
      <WButton variant="fulfilled" size="md">
        <WICon icon="arrowBottom" :color="blue[100]"/>
        asdasdasd
      </WButton>
    </div>
  </div>
  <div class="bgroup">
    <WBadge></WBadge>
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
.bgroup {
  width: 18px;
}
button {
  margin: 5px;
}
</style>
