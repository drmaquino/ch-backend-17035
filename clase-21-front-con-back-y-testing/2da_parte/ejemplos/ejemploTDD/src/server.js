import express from 'express'

import { crearRouter } from './routers/cosas.js'

export function crearServidor({ puerto, cosasDao }) {
  const app = express()

  app.use(express.json())

  app.use('/', crearRouter(cosasDao))

  let servidorEscuchando
  const servidor = {
    conectar: () => {
      return new Promise((resolve, reject) => {
        servidorEscuchando = app.listen(puerto, () => {
          resolve()
        })
        servidorEscuchando.on('error', err => {
          reject(err)
        })
      })
    },
    desconectar: () => {
      return new Promise((resolve, reject) => {
        servidorEscuchando.close(err => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
      })
    },
  }
  return servidor
}
