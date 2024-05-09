<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div class=" flex flex-row-reverse justify-end text-white">
      <h1>&nbsp;</h1>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  background-color: #c48738;
  color: white;
  text-align: left;
  padding: 0.5em;
}
</style>
