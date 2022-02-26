import axios from 'axios'
import assert from 'assert'
import { crearServidor } from '../src/server.js'

import { crearDao } from '../src/daos/cosas.js'

const cosasDao = crearDao()

describe('almacenador', () => {
  const servidor = crearServidor({ puerto: 8080, cosasDao })

  before(async () => {
    await servidor.conectar()
    axios.defaults.baseURL = 'http://localhost:8080'
  })

  after(async () => {
    await servidor.desconectar()
  })

  it('debería comenzar vacío', async () => {
    const { data: cosas } = await axios.get('/')
    assert.deepStrictEqual(cosas, [])
  })

  it('debería poder agregar cosas', async () => {
    const cosasAntes = [...cosasDao.verTodas()]
    const cosa = { nombre: 'silla' }

    const { data: cosasActualizada } = await axios.post('/', cosa)
    assert.deepStrictEqual(cosasActualizada, [...cosasAntes, cosa])
  })
})
