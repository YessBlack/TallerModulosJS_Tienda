import { calcularDescuento, formatearPrecio } from "./utilidades.js"

class Carrito {
  constructor(usuario) {
    this.usuario = usuario
    this.items = []
  }

  agregar(producto, cantidad) {
    if (!producto.hayStock(cantidad)) {
      return console.log('No hay productos en Stock')
    }

    this.items.push({ producto, cantidad })
    return console.log('Producto Agregado al Carrito')
  }

  subtotal() {
    let subtotal = 0

    for (const item of this.items) {
      subtotal += item.producto.precio * item.cantidad
    }

    return subtotal
  }

  total() {
    const subtotal = this.subtotal()
    return this.usuario.esVIP ? calcularDescuento(subtotal, 10) : subtotal
  }

  recibo() {
    const items = this.items
      .map(item => `  - ${item.producto.nombre}: \n     ${item.cantidad} x ${formatearPrecio(item.producto.precio)} = ${formatearPrecio(item.producto.precio * item.cantidad)}`)
      .join('\n')

    return `
=====================================
      FACTURA DE COMPRA
=====================================
Cliente: ${this.usuario.nombre} ${this.usuario.esVIP ? '(VIP ✨)' : ''}

${items}

-------------------------------------
DESCUENTO: ${this.usuario.esVIP ? '10 %' : '0'}
SUBTOTAL: ${formatearPrecio(this.subtotal())}
TOTAL: ${formatearPrecio(this.total())}
=====================================
    `
  }
}

export default Carrito
