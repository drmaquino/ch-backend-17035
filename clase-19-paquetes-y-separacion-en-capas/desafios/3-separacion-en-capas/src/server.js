import express from 'express'
import routerOperaciones from './rutas/operaciones.js'

const app = express()

app.use('/operaciones', routerOperaciones)

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  )
})
server.on('error', error => console.error(`Error en servidor`, error))
