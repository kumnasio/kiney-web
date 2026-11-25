---
name: screenshot-to-code
description: Convertir una captura de pantalla, un mockup o un diseño de referencia en componentes Vue 3 de la web de kiney. Úsala cuando el usuario pase una imagen y pida "hazlo así", "replica esta sección", "convierte esto en código" o mencione screenshottocode.
argument-hint: "<ruta de la imagen> [componente destino]"
---

# Captura → componente Vue

Inspirada en [screenshottocode.com](https://screenshottocode.com) (proyecto abierto
[abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)). Esa herramienta es una web aparte
que genera HTML/React/Vue a partir de una imagen; aquí Claude hace lo mismo directamente sobre el código
del proyecto, sin servicios externos ni claves de API.

## Flujo

1. **Lee la imagen** que da el usuario (ruta local o pegada en el chat). Si no la hay, pídela.
2. **Describe lo que ves** en pocas líneas: estructura (secciones, columnas, rejilla), jerarquía de
   textos, colores aproximados, tipografía, radios, sombras, estados visibles. Confirma con el usuario
   solo si la imagen es ambigua.
3. **Decide dónde va:** un componente existente de `web/src/components/` (navbar, bienvenida, contenido,
   setup, comunidad, contacto) o uno nuevo, un archivo `.vue` por sección.
4. **Escribe el código** siguiendo las reglas del proyecto:
   - Vue 3 con `<script setup>` en componentes nuevos; respeta el estilo de los existentes al editarlos.
   - Estilos `scoped` y, si existe `web/DESIGN.md` o hay variables CSS en `web/src/style.css`, úsalas
     antes que colores fijos.
   - HTML semántico (`<section>`, `<nav>`, `<button>`, `<a>`), `alt` en imágenes, foco visible.
   - Textos en español. Imágenes que no tengas: un hueco con `aspect-ratio` y un TODO, nunca una URL
     inventada.
   - Responsive: piensa también en 390 px de ancho aunque la captura sea de escritorio.
5. **Compara:** arranca la web (skill `dev-web`), haz una captura con `playwright-cli` al mismo ancho
   que la imagen original y corrige las diferencias visibles. Repite como mucho 2 o 3 veces.

## Si el usuario quiere usar screenshottocode.com

Es una herramienta web independiente, con su propia cuenta. Puede subir ahí la captura, elegir
"Vue + Tailwind" o "HTML + CSS" y pegar el resultado en el chat; entonces adapta ese código a las
convenciones de arriba (el proyecto no usa Tailwind: tradúcelo a CSS `scoped`).
