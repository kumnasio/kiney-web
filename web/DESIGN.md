---
version: 1
name: kiney — cine oscuro × Apple Liquid Glass
description: >-
  Web de un creador de contenido sobre setups y tecnología. Une una estética cinematográfica
  (hero enmarcado con foto cálida y grano de película, wordmark gigante en crema, navegación en
  pestaña colgando del marco, botón píldora con flecha) con la contención de Apple (mucho aire,
  titulares grandes con tracking negativo, superficies oscuras planas, un solo acento por pantalla,
  copia breve). Referencias: imagen "Helious" aportada por el usuario y library/apple.md.

colors:
  canvas: "#0b0a09"          # negro cálido de fondo de página
  surface: "#141311"         # tarjetas y bloques
  surface-raised: "#1c1a17"  # hover de tarjetas, inputs con foco
  hairline: "rgba(239, 232, 218, 0.10)"
  hairline-strong: "rgba(239, 232, 218, 0.18)"
  cream: "#efe8da"           # texto principal, wordmark y botón primario
  cream-dim: "#c9c2b4"       # texto secundario sobre foto
  muted: "#9a948a"           # metadatos, captions
  ink: "#0b0a09"             # texto sobre crema
  link: "#2997ff"            # azul de Apple sobre oscuro, solo enlaces de texto
  discord: "#5865f2"         # solo en el icono de Discord
  focus: "#2997ff"

typography:
  family: "Inter (Google Fonts), con -apple-system / SF Pro como primera opción en Apple"
  wordmark:   { size: "clamp(6rem, 22vw, 20rem)", weight: 500, tracking: "-0.065em", lineHeight: 0.8 }
  display:    { size: "clamp(2.5rem, 6vw, 4.5rem)", weight: 600, tracking: "-0.035em", lineHeight: 1.05 }
  headline:   { size: "clamp(1.75rem, 3.2vw, 2.5rem)", weight: 600, tracking: "-0.025em", lineHeight: 1.1 }
  lead:       { size: "clamp(1.06rem, 1.6vw, 1.31rem)", weight: 400, tracking: "-0.01em", lineHeight: 1.45 }
  body:       { size: "17px", weight: 400, tracking: "-0.022em", lineHeight: 1.47 }
  caption:    { size: "14px", weight: 400, tracking: "-0.016em", lineHeight: 1.43 }
  eyebrow:    { size: "13px", weight: 500, tracking: "0.08em", transform: uppercase }

radius:
  frame: 28px    # marco del hero
  card: 20px     # tarjetas, inputs grandes
  thumb: 14px    # miniaturas
  pill: 999px    # botones, chips, navegación

spacing:
  page-gutter: "clamp(12px, 1.6vw, 20px)"   # margen del marco del hero
  section-gap: "clamp(96px, 14vw, 160px)"   # aire de Apple entre secciones
  content-max: 1120px

motion:
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"
  fast: 180ms
  base: 320ms
  hero-enter: "fade + 24px rise, 900ms, escalonado 80ms"
  reduced-motion: "sin desplazamientos; solo opacidad"
---

# kiney — sistema de diseño

## Atmósfera

Oscuro, cálido y tranquilo, como el fotograma de una película al atardecer. La primera pantalla es
una sola imagen enmarcada con el nombre del canal enorme encima; el resto de la página baja el
volumen y se comporta como Apple: fondo plano, titulares centrados y grandes, mucho aire y una sola
acción por bloque.

## Reglas

1. **Hero enmarcado.** Ocupa la primera pantalla (`100svh` menos el margen), con un marco redondeado
   de `radius.frame` separado `page-gutter` del borde. Lleva foto cálida, un degradado oscuro abajo
   para que se lea el texto y grano de película (SVG `feTurbulence`, opacidad 0,12–0,18,
   `mix-blend-mode: overlay`).
2. **Wordmark.** "kiney" en crema, tamaño `wordmark`, abajo a la izquierda y pegado al borde
   inferior. A su lado va la estrella de 4 puntas del logo, como el asterisco de la referencia. A la
   derecha, un texto corto de 2–3 líneas y el botón primario.
3. **Navegación de cristal.** Una cápsula de cristal (ver "Material Liquid Glass") flota centrada
   arriba, dentro del marco del hero, y se queda fija al hacer scroll, desenfocando lo que pasa por
   debajo. Los enlaces son anclas a las secciones (`#contenido`, `#setup`, `#comunidad`,
   `#contacto`).
4. **Botón primario.** Píldora de cristal más opaca (`glass-fill-strong`) con texto crema y, a la
   derecha, un círculo crema con una flecha `ink`. En hover la flecha avanza 3 px y el borde se
   aclara. El secundario es una píldora de cristal más ligera (`glass-fill`). No se usa ningún otro
   estilo de botón, tampoco el naranja de Amazon.
5. **Secciones al estilo Apple.** Cada una tiene un eyebrow, un titular `display` centrado y una
   entradilla `lead` en `muted`; debajo va el contenido en `content-max`. Entre secciones se deja
   `section-gap`. No hay líneas divisorias: separa el aire.
6. **Tarjetas.** Son de cristal, con `radius.card`. En hover suben 2 px, el borde se aclara y la
   imagen interior hace zoom 1.03. Los campos del formulario, el selector PC/Periféricos y la
   etiqueta de duración de los vídeos también usan cristal, en versión más ligera.
7. **Color.** Solo crema sobre negro cálido. Detrás del contenido hay una luz ambiental fija, con
   halos cálidos y azulados muy suaves (`body::before`), para que el cristal tenga algo que desenfocar. El azul `link` se reserva para enlaces de texto y el
   anillo de foco. Las marcas de terceros (Discord, Amazon, YouTube) aparecen solo en su icono.
8. **Imágenes sin contenido.** Nunca debe verse un `<img>` roto. Sin imagen, el hueco mantiene su
   `aspect-ratio` y muestra un fondo `surface-raised` con un icono centrado en `muted`.
9. **Accesibilidad.** Foco visible con `:focus-visible` (anillo de 2 px `focus` y 3 px de separación),
   etiquetas en todos los campos, `prefers-reduced-motion` respetado, contraste AA y
   `scroll-margin-top` en las secciones para que la navegación no tape los títulos.

## Material Liquid Glass

Es una aproximación en CSS al cristal de Apple. Los tokens están en `web/src/style.css` y la clase
`.glass` los aplica todos juntos.

- **Relleno:** degradado vertical blanco translúcido, de 14 % a 4 % (`--glass-fill`). Los elementos
  que necesitan más presencia usan de 26 % a 10 % (`--glass-fill-strong`).
- **Desenfoque:** `backdrop-filter: blur(22px) saturate(180%)`. La saturación es lo que hace que el
  color de debajo "brille" a través del cristal.
- **Borde:** 1 px blanco al 18 % (`--glass-edge`).
- **Luz:** un brillo interior de 1 px arriba y un reflejo tenue abajo, más una sombra suave hacia
  fuera (`--glass-shadow`). La navegación añade además un brillo especular radial en su parte
  superior.
- **Dónde usarlo:** en la navegación, los botones, las tarjetas, los campos, el selector y los chips.
  Nunca en bloques de texto largo ni detrás de los titulares.

## Do / Don't

- **Do:** frases cortas en español con tono cercano, una idea por bloque, y fotos reales del setup en
  cuanto las haya, que sustituirán a la foto provisional del hero.
- **Don't:** degradados de colores, sombras grandes, varios acentos, textos en gris sobre foto sin
  degradado de apoyo, ni carruseles.

## Foto provisional

`web/src/assets/hero.jpg`, de David Marcu en Unsplash (https://unsplash.com/photos/CaQ_KITtnVY),
con licencia Unsplash. Cámbiala por una foto propia del setup cuando la tengas.
