# kiney-web

Repositorio de la web de Kiney. El usuario escribe en español: responde y comenta en español.

## Estructura

- `web/` — la web (Vue 3 + Vite + PrimeVue). Todo el código de la aplicación vive aquí.
- `.claude/` — configuración de Claude Code para este repo:
  - `settings.json` — permisos compartidos del proyecto.
  - `skills/` — skills del proyecto (una carpeta por skill, con su `SKILL.md`).
  - `settings.local.json` — ajustes personales, ignorado por git.

## Comandos (ejecutar dentro de `web/`)

```sh
cd web
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo con hot-reload
npm run build     # build de producción en web/dist
npm run preview   # servir el build localmente
```

Node: `^22.18.0 || >=24.12.0` (ver `web/package.json`).

## Convenciones

- Componentes en `web/src/components/`, un archivo `.vue` por sección de la página (navbar, bienvenida, contenido, comunidad, contacto…). Páginas en `web/src/views/` con `vue-router` (`web/src/router.js`): `/` y `/recomendaciones`.
- Productos (Mi setup y Recomendaciones): salen de Google Sheets publicado como CSV vía `useHoja()` (`web/src/composables/useHoja.js`); los enlaces van en `web/src/data/fuentes.js` y la copia de respaldo en `web/public/data/*.csv`. Guía para el usuario en `web/src/data/README.md`. No usar JSON ni Pinia para estos datos. Flujo actual: la hoja privada "kiney-web · productos" tiene una pestaña por categoría (`Setup · PC`, `Setup · Periféricos`, `Reco · <Categoría>`); cuando el usuario pide "actualiza la web", se vuelcan en `web/public/data/setup.csv` (seccion = pc|perifericos) y `recomendaciones.csv` (categoria = nombre de la pestaña sin el prefijo), se hace build y commit.
- Diseño: seguir `web/DESIGN.md` (oscuro cinematográfico + Apple Liquid Glass).
- Alias `@` → `web/src` (configurado en `vite.config.js` y `jsconfig.json`).
- UI con PrimeVue (tema Aura de `@primeuix/themes`) y `primeicons`.
- No subir `node_modules/` ni `dist/` (están en `.gitignore`).

## Skills de diseño (`.claude/skills/`)

- `design-taste-frontend` (taste-skill): construir o rediseñar secciones con criterio visual. Trae un hook de parada que ejecuta sus comprobaciones solo si hay una build suya activa (`.taste-skill/build.json`).
- `web-design-guidelines` (Vercel): auditar accesibilidad y UX de los componentes, salida `archivo:línea`.
- `design-md`: elegir una referencia entre 84 webs reales y escribir/aplicar `web/DESIGN.md`.
- `screenshot-to-code`: convertir una captura o mockup en un componente `.vue`.
- `playwright-cli` (Microsoft): manejar un navegador desde la terminal. Está instalado como devDependency en `web/`, no en el PATH: usa `npx --prefix web playwright-cli <comando>` desde la raíz (o `npx playwright-cli` dentro de `web/`) en lugar de `playwright-cli` a secas.
