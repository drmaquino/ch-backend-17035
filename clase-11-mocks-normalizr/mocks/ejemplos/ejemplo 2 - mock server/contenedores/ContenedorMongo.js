class ContenedorMongo {
  constructor(cliente, coleccion) {
    this.cliente = cliente
    this.elementos = cliente.collection(coleccion)
  }

  async listar(id) {
    const elem = await this.elementos.findOne({ id }).project({ _id: 0 })
    if (!elem) {
      throw new Error(`Error al listar: elemento no encontrado`)
    } else {
      return elem
    }
  }

  async listarAll() {
    const elems = await this.elementos.find({}).project({ _id: 0 }).toArray()
    return elems
  }

  async guardar(newElem) {
    const paraInsertar = { ...newElem }
    await this.elementos.insertOne(paraInsertar)
    return newElem
  }

  async actualizar(elem) {
    // await this.leer()
    // elem.id = Number(elem.id)
    // const index = this.elementos.findIndex(p => p.id == elem.id)
    // if (index == -1) {
    //   throw new Error(`Error al actualizar: elemento no encontrado`)
    // } else {
    //   this.elementos[index] = elem
    //   await this.escribir()
    //   return elem
    // }
  }

  async borrar(id) {
    // await this.leer()
    // const index = this.elementos.findIndex(elem => elem.id == id)
    // if (index == -1) {
    //   throw new Error(`Error al borrar: elemento no encontrado`)
    // } else {
    //   const [borrado] = this.elementos.splice(index, 1)
    //   await this.escribir()
    //   return borrado
    // }
  }

  async borrarAll() {
    // this.elementos = []
    // await this.escribir()
  }
}

export default ContenedorMongo
