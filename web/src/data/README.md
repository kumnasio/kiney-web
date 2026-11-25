# Cómo actualizar los productos de la web

Los productos de **Mi setup** y de la página **/recomendaciones** salen de una hoja de Google
Sheets. Cuando cambias la hoja, la web se actualiza sola, sin tocar código ni volver a publicar.
Google tarda unos 5 minutos en refrescar la versión publicada.

## Puesta en marcha (una sola vez)

1. Crea una hoja nueva en Google Sheets, por ejemplo "kiney-web productos".
2. Crea dos pestañas, llamadas `setup` y `recomendaciones`.
3. En cada pestaña importa su plantilla: **Archivo → Importar → Subir**. Elige
   `web/public/data/setup.csv` o `web/public/data/recomendaciones.csv` y la opción
   **"Reemplazar hoja actual"**.
4. Publica cada pestaña en **Archivo → Compartir → Publicar en la web**:
   - En "Vínculo", elige la pestaña (`setup`) y el formato **Valores separados por comas (.csv)**.
   - Pulsa **Publicar** y copia el enlace (termina en `output=csv`).
   - Repite con la pestaña `recomendaciones`.
5. Pega los dos enlaces en `web/src/data/fuentes.js`, en `sheet: ''`.

Publicar no da permiso de edición a nadie: solo se puede leer la versión publicada. No metas en esa
hoja nada privado.

## Pestaña `setup` (tu PC y tus periféricos)

| seccion | tipo | modelo | precio | imagen | enlace | visible |
|---|---|---|---|---|---|---|
| pc | Procesador | AMD Ryzen 7 7800X3D | 399,99 € | https://… | https://amzn.to/… | sí |
| perifericos | Teclado | … | … | … | … | sí |

- `seccion`: `pc` o `perifericos`. Decide en qué pestaña de la web aparece.
- `tipo`: el texto pequeño de arriba de la tarjeta.

## Pestaña `recomendaciones`

| categoria | nombre | por_que | precio | imagen | enlace | destacado | visible |
|---|---|---|---|---|---|---|---|
| Iluminación | Barra de luz para monitor | Ilumina el teclado sin reflejos. | 49,99 € | https://… | https://amzn.to/… | sí | sí |

- `categoria`: texto libre. Cada categoría distinta crea su propio filtro. Para que no salgan dos
  filtros, escríbela siempre igual ("Audio", no "audio" en una fila y "Audio" en otra).
- `por_que`: una frase corta tuya. Es opcional.
- `destacado`: `sí` muestra la etiqueta "Mi favorito" y pone el producto al principio.

## Columnas comunes

- `imagen`: **obligatoria**. Si falta, la tarjeta muestra "Imagen pendiente". Hay dos formas de
  ponerla:
  - Una foto tuya: guárdala en `web/public/productos/` y escribe `/productos/nombre.webp`.
  - Una URL de imagen de Amazon sacada con **SiteStripe** (la barra de Amazon Afiliados). Es la forma
    que permiten sus normas; copiar la imagen de la página con el botón derecho no lo es.

  Las fotos con fondo blanco quedan mejor, porque el blanco se funde con el panel claro de la tarjeta.
- `enlace`: tu enlace de afiliado.
- `visible`: escribe `no` para ocultar un producto sin borrarlo.
- **Orden:** se respeta el orden de las filas. Arrastra filas para cambiarlo.
- **Columnas nuevas:** puedes añadir más (por ejemplo, notas tuyas). La web ignora las que no conoce.
  Lo que no puedes hacer es cambiar el nombre de las de arriba.

## Si algo falla

Si la hoja no responde, la web usa la copia local de `web/public/data/*.csv`. De vez en cuando
conviene descargar la hoja (**Archivo → Descargar → CSV**) y guardarla ahí como respaldo.
