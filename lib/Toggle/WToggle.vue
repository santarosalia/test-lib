<script setup lang="ts">
</script>
<template>
    <div></div>
</template>
<style scoped>
div {
    position: relative;
    width: 67px;
    height: 22px;
    -webkit-appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    cursor: pointer;
  /* transition: .5s; */
}
.toggle-option:checked{
    background: #03a9f4;
}
.toggle-option:checked::after{
    content: 'ON';
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    height: 21px;
}

.toggle-option::after{
    content: 'OFF';
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a3a3a3;
    font-size: 12px;
    height: 21px;
}
.toggle-option::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    top: -2.5px;
    left: -6px;
    background: #fff;
    transform: scale(1.1);
    box-shadow:  0 2px 5px rgba(0,0,0,.2);
    transition: .5s;
}
.toggle-option:checked::before{
    left: 49px;
}
</style>