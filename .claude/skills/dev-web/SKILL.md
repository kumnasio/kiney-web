---
name: dev-web
description: Arrancar, compilar o previsualizar la web Vue de kiney-web (carpeta web/). Úsala cuando haya que ejecutar la web, comprobar que compila o ver un cambio en el navegador.
---

# Ejecutar la web de kiney-web

La aplicación está en `web/` (Vue 3 + Vite). Todos los comandos se ejecutan desde esa carpeta.

1. Si falta `web/node_modules`, instala dependencias: `cd web && npm install`.
2. Para comprobar que compila: `cd web && npm run build` (salida en `web/dist`).
3. Para verlo en el navegador: `cd web && npm run dev` (en segundo plano) y abre la URL que imprime Vite, normalmente http://localhost:5173.
4. Para probar el build de producción: `cd web && npm run build && npm run preview` (normalmente http://localhost:4173).

Si el build falla, lee el error de Vite, corrige el archivo indicado en `web/src/` y vuelve a compilar.
