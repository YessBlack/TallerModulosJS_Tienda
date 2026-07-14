class Producto {
  constructor(nombre, precio, categoria, stock) {
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.stock = stock
  }

  hayStock(cantidad) {
    return this.stock >= cantidad
  }

  ficha() {
    const estadoStock = this.stock > 0
      ? `${this.stock} unidades disponibles`
      : 'Sin stock'

    return `${this.nombre}
      - Categoría: ${this.categoria}
      - Precio: ${this.precio}
      - Stock: ${estadoStock}
    `
  }
}

export default Producto
