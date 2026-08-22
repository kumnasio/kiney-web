<template>
  <div class="navbar">
    <navbar />
    <bienvenida />
    <contenido />
    <setup />
  </div>
  
</template>

<script setup>
import navbar from './components/navbar.vue'
import bienvenida from './components/bienvenida.vue'
import contenido from './components/contenido.vue'
import setup from './components/setup.vue'
</script>

<style>
@import url('style.css');
</style>
