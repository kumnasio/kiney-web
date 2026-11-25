<template>
  <div class="navbar">
    <navbar />
    <bienvenida />
    <contenido />
    <setup />
    <comunidad />
    <contacto />
  </div>
  
</template>

<script setup>
import navbar from './components/navbar.vue'
import bienvenida from './components/bienvenida.vue'
import contenido from './components/contenido.vue'
import setup from './components/setup.vue'
import comunidad from './components/comunidad.vue'
import contacto from './components/contacto.vue'
</script>

<style>
@import url('style.css');
</style>
