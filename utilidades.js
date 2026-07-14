const precioFormateado = (precio) => {
  return precio.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP'
  })
}

const esEmailValido = (email) => {
  return email.includes('@') && email.includes('.')
}

const calcularDescuento = (precio, porcentaje) => {
  return precio - ((precio * porcentaje) / 100)
}

module.exports = {
  precioFormateado,
  esEmailValido,
  calcularDescuento
}
