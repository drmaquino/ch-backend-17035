import ApiUsuariosMockFs from './usuariosFS.js'
import ApiUsuariosMockMem from './usuariosMem.js'
import ApiUsuariosMongo from './usuariosMongo.js'

import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost/coderhouse'

const option = 'mongo'

let apiUsuarios
switch (option) {
  case 'file':
    apiUsuarios = new ApiUsuariosMockFs()
    break
  case 'mongo':
    const mongoClient = new MongoClient(url)
    await mongoClient.connect()
    apiUsuarios = new ApiUsuariosMongo(mongoClient.db())
    break
  default:
    apiUsuarios = new ApiUsuariosMockMem()
}

export default apiUsuarios
