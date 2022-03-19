import fs from 'fs'

class ContenedorFS {
  constructor(ruta) {
    this.ruta = ruta
    this.elementos = []
  }

  async leer() {
    this.elementos = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
  }

  async escribir() {
    await fs.promises.writeFile(this.ruta, JSON.stringify(this.elementos))
  }

  async listar(id) {
    await this.leer()
    const elem = this.elementos.find(elem => elem.id == id)
    if (!elem) {
      throw new Error(`Error al listar: elemento no encontrado`)
    } else {
      return elem
    }
  }

  async listarAll() {
    await this.leer()
    return [...this.elementos]
  }

  async guardar(newElem) {
    await this.leer()
    this.elementos.push(newElem)
    await this.escribir()
    return newElem
  }

  async actualizar(elem) {
    await this.leer()
    elem.id = Number(elem.id)
    const index = this.elementos.findIndex(p => p.id == elem.id)
    if (index == -1) {
      throw new Error(`Error al actualizar: elemento no encontrado`)
    } else {
      this.elementos[index] = elem
      await this.escribir()
      return elem
    }
  }

  async borrar(id) {
    await this.leer()

    const index = this.elementos.findIndex(elem => elem.id == id)
    if (index == -1) {
      throw new Error(`Error al borrar: elemento no encontrado`)
    } else {
      const [borrado] = this.elementos.splice(index, 1)
      await this.escribir()
      return borrado
    }
  }

  async borrarAll() {
    this.elementos = []
    await this.escribir()
  }
}

export default ContenedorFS
