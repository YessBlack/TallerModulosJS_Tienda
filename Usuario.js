class Usuario {
  constructor(nombre, email, esVIP) {
    this.nombre = nombre
    this.email = email
    this.esVIP = esVIP
  }

  saludar() {
    return this.nombre
  }
}

module.exports = Usuario
