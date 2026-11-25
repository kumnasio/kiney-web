<template>
  <navbar />
  <main>
    <bienvenida />
    <contenido />
    <setup />
    <comunidad />
    <contacto />
  </main>

  <footer class="site-footer">
    <span>© {{ year }} kiney</span>
    <span>
      Foto de portada:
      <a href="https://unsplash.com/photos/CaQ_KITtnVY" target="_blank" rel="noopener noreferrer">David Marcu / Unsplash</a>
    </span>
  </footer>
</template>

<script setup>
import navbar from './components/navbar.vue'
import bienvenida from './components/bienvenida.vue'
import contenido from './components/contenido.vue'
import setup from './components/setup.vue'
import comunidad from './components/comunidad.vue'
import contacto from './components/contacto.vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;

  width: min(100% - 2 * var(--gutter) - 24px, var(--content-max));
  margin: var(--section-gap) auto 0;
  padding: 28px 0 40px;

  border-top: 1px solid var(--hairline);
  color: var(--muted);
  font-size: 13px;
}

.site-footer a {
  color: var(--cream-dim);
}
</style>
