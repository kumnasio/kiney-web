<template>
  <a class="skip-link" href="#principal">Saltar al contenido</a>
  <navbar />
  <main id="principal" tabindex="-1">
    <RouterView />
  </main>

  <footer class="site-footer">
    <p class="afiliados">
      Algunos enlaces son de afiliado: como afiliado de Amazon, obtengo ingresos por las compras
      adscritas que cumplen los requisitos aplicables. A ti no te cuesta nada más.
    </p>
    <div class="footer-fila">
      <span>© {{ year }} <span translate="no">kiney</span></span>
      <span>
        Foto de portada:
        <a href="https://unsplash.com/photos/CaQ_KITtnVY" target="_blank" rel="noopener noreferrer">David Marcu / Unsplash</a>
      </span>
    </div>
  </footer>
</template>

<script setup>
import navbar from './components/navbar.vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.skip-link {
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 2000;

  padding: 10px 16px;
  border-radius: var(--r-pill);

  background: var(--cream);
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;

  transform: translateY(-150%);
  transition: transform var(--fast) var(--ease);
}

.skip-link:focus-visible {
  transform: none;
  text-decoration: none;
}

.site-footer {
  width: min(100% - 2 * var(--gutter) - 24px, var(--content-max));
  margin: var(--section-gap) auto 0;
  padding: 28px 0 40px;

  border-top: 1px solid var(--hairline);
  color: var(--muted);
  font-size: 13px;
}

.afiliados {
  max-width: 640px;
  margin: 0 0 16px;
  line-height: 1.5;
}

.footer-fila {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

.site-footer a {
  color: var(--cream-dim);
}

main:focus {
  outline: none;
}
</style>
