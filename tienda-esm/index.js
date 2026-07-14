import Carrito from "./Carrito.js"
import Producto from "./Producto.js"
import Usuario from "./Usuario.js"
import { esEmailValido } from "./utilidades.js"

const app = (usuario, productos) => {
  if (!esEmailValido(usuario.email)) {
    return console.log('Email No es Valido')
  }

  const carrito = new Carrito(usuario)

  for (const { producto, cantidad } of productos) {
    carrito.agregar(producto, cantidad)
  }

  console.log(carrito.recibo())
}

// Prueba 1
const usuario1 = new Usuario("Jose Maria", "josema@gmail.com", true)
const productos1 = [
  { producto: new Producto('Camisa', 25000, 'Ropa', 10), cantidad: 5 },
  { producto: new Producto('Pantalón', 80000, 'Ropa', 20), cantidad: 25 },
  { producto: new Producto('Zapatos', 120000, 'Calzado', 15), cantidad: 2 }
]

// Prueba 2
const usuario2 = new Usuario("Ana Torres", "ana@gmail.com", false)
const productos2 = [
  { producto: new Producto('Camisa', 25000, 'Ropa', 10), cantidad: 2 }
]

app(usuario2, productos2)
