<script setup lang="ts">
import { WButton, WIcon, WBadge, WToggle, WTypography } from "@lib";
import { blue } from "@lib";
</script>

<template>
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
      <WIcon icon="arrowBottom" :color="blue[500]"/>
      <WButton variant="filled" size="md">
        <WIcon icon="arrowBottom" :color="blue[500]"/>
        asd
      </WButton>
      <WButton variant="filled" size="md">
        asdasdasd
      </WButton>
      <WButton variant="filled" size="md">
        <WIcon icon="arrowBottom" :color="blue[100]"/>
        k
      </WButton>
    </div>
  </div>
  <div class="bgroup">
    <WBadge>
      N
    </WBadge>
    <WToggle></WToggle>
  </div>
  <div class="typo">
    Typo
    <WTypography level="display1">Display1</WTypography>
    <WTypography level="display2">Display2</WTypography>
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
  display: flex;
}
.typo {
  display: flex;
  flex-direction: column
}
button {
  margin: 5px;
}
</style>
