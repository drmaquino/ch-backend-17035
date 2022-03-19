import ContenedorMongo from '../contenedores/ContenedorMongo.js'
import { generarUsuario } from '../utils/generadorDeUsuarios.js'
import { generarId } from '../utils/generadorDeIds.js'

class ApiUsuariosMongo extends ContenedorMongo {
  constructor(cliente) {
    super(cliente, 'usuarios')
  }

  async popular(cant = 50) {
    const nuevos = []
    for (let i = 0; i < cant; i++) {
      const nuevoUsuario = generarUsuario(generarId())
      const guardado = await this.guardar(nuevoUsuario)
      nuevos.push(guardado)
    }
    return nuevos
  }

  // async agregarACarritoPorId(id, idProd) {
  //   const carrito = await this.listar(id)
  //   carrito.productos.push(idProd)
  //   await this.actualizar(id, carrito)
  // }

  // async quitarDelCarritoPorId(id, idProd) {
  //   const carrito = await this.listar(id)
  //   const index = carrito.productos.findIndex(p => p.id == idProd)
  //   if (index == -1) throw new Error('NOT FOUND')
  //   carrito.productos.splice(index, 1)
  //   await this.actualizar(id, carrito)
  // }
}

export default ApiUsuariosMongo
