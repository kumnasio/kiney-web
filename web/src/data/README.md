# Datos editables de la web

## `setup.json` — sección "Mi setup"

Tiene dos listas, `pc` y `perifericos`. Cada producto es un bloque así:

```json
{
  "tipo": "Procesador",
  "modelo": "AMD Ryzen 7 7800X3D",
  "precio": "399,99 €",
  "imagen": "/productos/ryzen-7800x3d.webp",
  "icono": "pi-microchip",
  "enlace": "https://amzn.to/xxxxxxx"
}
```

| Campo    | Qué es |
|----------|--------|
| `tipo`   | Texto pequeño de arriba (Procesador, Teclado…). |
| `modelo` | Nombre grande del producto. |
| `precio` | Texto libre, tal cual se muestra. |
| `imagen` | Ruta de la foto dentro de `web/public/`. Pon el archivo en `web/public/productos/` y escribe `/productos/nombre.webp`. Si lo dejas vacío (`""`) se muestra el icono. |
| `icono`  | Icono de [PrimeIcons](https://primevue.org/icons/) que sale cuando no hay imagen (`pi-microchip`, `pi-desktop`, `pi-headphones`…). |
| `enlace` | Tu enlace de afiliado de Amazon. |

- **Añadir un producto:** copia un bloque, pégalo detrás de otro y pon una coma entre los dos.
- **Quitar un producto:** borra el bloque y la coma que sobre.
- **Cambiar el orden:** mueve los bloques; se muestran en el orden del archivo.

El JSON es estricto: van comillas dobles, comas entre bloques y ninguna coma después del último. Si te
equivocas, `npm run dev` mostrará el error con el número de línea.
