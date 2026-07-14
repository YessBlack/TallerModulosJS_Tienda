# Taller de Módulos en JavaScript — Tienda

Taller práctico sobre **sistemas de módulos en Node.js**, implementando una mini tienda con clases. El ejercicio se resuelve en dos versiones:

1. **CommonJS** — archivos en la raíz del proyecto (`require` / `module.exports`)
2. **ES Modules (ESM)** — carpeta `tienda-esm/` (`import` / `export`)

---

## Objetivo del ejercicio

Construir una tienda modular con las siguientes piezas:

| Módulo        | Responsabilidad                                              |
|---------------|--------------------------------------------------------------|
| `Usuario.js`  | Representa al cliente (nombre, email, estado VIP)            |
| `Producto.js` | Representa un producto (nombre, precio, categoría, stock)    |
| `Carrito.js`  | Gestiona los ítems, calcula subtotal/total y genera recibo   |
| `utilidades.js` | Funciones auxiliares: validar email, formatear precio, descuento |

En `index.js` se debía:

- Validar el email del usuario con `esEmailValido`
- Crear un carrito asociado al usuario
- Agregar productos al carrito (respetando el stock disponible)
- Mostrar el recibo de compra

Para facilitar las pruebas con distintos escenarios, se encapsuló esa lógica en una función `app(usuario, productos)` que recibe los parámetros desde afuera, en lugar de tener los datos fijos dentro del archivo.

---

## Estructura del proyecto

```
tienda/
├── index.js          # Punto de entrada (CommonJS)
├── Usuario.js
├── Producto.js
├── Carrito.js
├── utilidades.js
└── tienda-esm/       # Misma lógica con ES Modules
    ├── package.json  # "type": "module"
    ├── index.js
    ├── Usuario.js
    ├── Producto.js
    ├── Carrito.js
    └── utilidades.js
```

---

## Requisitos

- [Node.js](https://nodejs.org/) v14 o superior

---

## Cómo ejecutar

### CommonJS

Desde la raíz del proyecto:

```bash
node index.js
```

### ES Modules

Desde la carpeta `tienda-esm/`:

```bash
cd tienda-esm
node index.js
```

> La versión ESM requiere `"type": "module"` en `package.json` y el uso de la extensión `.js` en las rutas de importación.

---

## Diferencias entre CommonJS y ESM

| Aspecto              | CommonJS                          | ESM                                      |
|----------------------|-----------------------------------|------------------------------------------|
| Importar             | `const X = require('./X.js')`     | `import X from './X.js'`                 |
| Exportar (default)   | `module.exports = Clase`          | `export default Clase`                   |
| Exportar (nombrado)  | `module.exports = { fn1, fn2 }`   | `export const fn1 = ...`                 |
| Configuración        | Por defecto en Node.js            | `"type": "module"` en `package.json`     |

---

## Clases y funciones

### `Usuario`

- Propiedades: `nombre`, `email`, `esVIP`
- Los usuarios VIP reciben un **10 % de descuento** sobre el subtotal

### `Producto`

- Propiedades: `nombre`, `precio`, `categoria`, `stock`
- `hayStock(cantidad)` — verifica si hay unidades suficientes
- `ficha()` — muestra información del producto

### `Carrito`

- `agregar(producto, cantidad)` — añade un ítem si hay stock
- `subtotal()` — suma de precio × cantidad
- `total()` — aplica descuento VIP si corresponde
- `recibo()` — genera la factura formateada en pesos colombianos (COP)

### `utilidades.js`

- `esEmailValido(email)` — validación básica (debe contener `@` y `.`)
- `formatearPrecio(precio)` — formato moneda `es-CO`
- `calcularDescuento(precio, porcentaje)` — resta el porcentaje al precio

---

## Escenarios de prueba incluidos

En `index.js` hay dos casos preparados. Puedes cambiar la llamada al final del archivo para probar cada uno:

**Prueba 1 — Usuario VIP con varios productos**

```js
app(usuario1, productos1)
```

- Usuario VIP (`josema@gmail.com`)
- Agrega camisa, pantalón y zapatos
- El pantalón supera el stock (25 unidades, solo hay 20) → mensaje de error de stock

**Prueba 2 — Usuario regular**

```js
app(usuario2, productos2)
```

- Usuario no VIP (`ana@gmail.com`)
- Agrega 2 camisas
- Sin descuento en el total

Para probar un email inválido, crea un usuario con un email sin `@` o sin `.` y pasa sus productos a `app()`.

---

## Ejemplo de salida

```
Producto Agregado al Carrito
Producto Agregado al Carrito

=====================================
      FACTURA DE COMPRA
=====================================
Cliente: Ana Torres 

  - Camisa: 
     2 x $ 25.000,00 = $ 50.000,00

-------------------------------------
DESCUENTO: 0
SUBTOTAL: $ 50.000,00
TOTAL: $ 50.000,00
=====================================
```

---

## Autor

Taller realizado en el programa de **Generation Colombia** — Módulos JavaScript (CommonJS y ESM).
