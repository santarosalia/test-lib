<script setup lang="ts">
import { WButton, WIcon, WBadge, WToggle, WTypography, WPaper, WInput, WTextarea } from "@lib";
import { typography } from "@lib/Typography/config";
import { Level } from "@lib/Typography/interface";
import { reactive, ref, watch } from "vue";
const typographyKeyList = Object.keys(typography) as Level[];
const isError = ref(false);
const msg = ref('');
const o = ref('abcdef');
const click = () => {
  // isError.value = !isError.value;
  // msg.value =  msg.value === 'abc'? 'ffff' : 'abc'
  console.log(o)
}
const toggle = ref(false);
const ch = () => {
  console.log(toggle.value)
}
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
      <WIcon icon="arrowBottom" color="blue300"/>
      <WButton variant="filled" size="md">
        <WIcon icon="arrowBottom" color="yellow100"/>
        asd
      </WButton>
      <WButton variant="filled" size="md">
        asdasdasd
      </WButton>
      <WButton variant="filled" size="md">
        <WIcon icon="arrowBottom" color="green500"/>
        k
      </WButton>
    </div>
  </div>
  <div class="bgroup">
    <WBadge>
      N
    </WBadge>
    <WToggle v-model="toggle" @change="ch"></WToggle>
  </div>
  <div class="typo">
    Typography
    <WTypography v-for="key in typographyKeyList" :level="key">{{key}}</WTypography>
  </div>
  <WPaper>
    <template #header>header</template>
    <template #default>body</template>
  </WPaper>
  <WPaper>
    <template #default>body</template>
  </WPaper>
  <WButton size="sm" variant="filled" @click="click">
    <WIcon icon="rotate" color="red200" ></WIcon>
  </WButton>
  <WInput error :msg="'aga'" v-model="o" showCount></WInput>
  <WTextarea disabled v-model="o" msg="messssssssssssssssssage" showCount maxlength="20"></WTextarea>
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
