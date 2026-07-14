export const formatearPrecio = (precio) => {
  return precio.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP'
  })
}

export const esEmailValido = (email) => {
  return email.includes('@') && email.includes('.')
}

export const calcularDescuento = (precio, porcentaje) => {
  return precio - ((precio * porcentaje) / 100)
}
