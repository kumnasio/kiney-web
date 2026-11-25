---
version: 1
name: kiney — cine oscuro × Apple
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
3. **Navegación en pestaña.** Barra del color `canvas` que cuelga del borde superior, con las
   esquinas inferiores redondeadas, para que parezca una muesca recortada en el marco. Es fija al
   hacer scroll. Los enlaces son anclas a las secciones (`#contenido`, `#setup`, `#comunidad`,
   `#contacto`).
4. **Botón primario.** Píldora crema con texto `ink` y, a la derecha, un círculo `ink` con una flecha
   crema. En hover la flecha avanza 3 px. El secundario es una píldora con borde `hairline-strong` y
   texto crema. No se usa ningún otro estilo de botón, tampoco el naranja de Amazon.
5. **Secciones al estilo Apple.** Cada una tiene un eyebrow, un titular `display` centrado y una
   entradilla `lead` en `muted`; debajo va el contenido en `content-max`. Entre secciones se deja
   `section-gap`. No hay líneas divisorias: separa el aire.
6. **Tarjetas.** Fondo `surface`, borde `hairline` y `radius.card`, sin sombras. En hover suben
   2 px, el borde pasa a `hairline-strong` y la imagen interior hace zoom 1.03.
7. **Color.** Solo crema sobre negro cálido. El azul `link` se reserva para enlaces de texto y el
   anillo de foco. Las marcas de terceros (Discord, Amazon, YouTube) aparecen solo en su icono.
8. **Imágenes sin contenido.** Nunca debe verse un `<img>` roto. Sin imagen, el hueco mantiene su
   `aspect-ratio` y muestra un fondo `surface-raised` con un icono centrado en `muted`.
9. **Accesibilidad.** Foco visible con `:focus-visible` (anillo de 2 px `focus` y 3 px de separación),
   etiquetas en todos los campos, `prefers-reduced-motion` respetado, contraste AA y
   `scroll-margin-top` en las secciones para que la navegación no tape los títulos.

## Do / Don't

- **Do:** frases cortas en español con tono cercano, una idea por bloque, y fotos reales del setup en
  cuanto las haya, que sustituirán a la foto provisional del hero.
- **Don't:** degradados de colores, sombras grandes, varios acentos, textos en gris sobre foto sin
  degradado de apoyo, ni carruseles.

## Foto provisional

`web/src/assets/hero.jpg`, de David Marcu en Unsplash (https://unsplash.com/photos/CaQ_KITtnVY),
con licencia Unsplash. Cámbiala por una foto propia del setup cuando la tengas.
