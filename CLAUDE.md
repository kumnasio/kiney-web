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

- Componentes en `web/src/components/`, un archivo `.vue` por sección de la página (navbar, bienvenida, contenido, comunidad, contacto…).
- Alias `@` → `web/src` (configurado en `vite.config.js` y `jsconfig.json`).
- UI con PrimeVue (tema Aura de `@primeuix/themes`) y `primeicons`.
- No subir `node_modules/` ni `dist/` (están en `.gitignore`).
