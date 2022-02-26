import { Router } from 'express'

function crearRouter(cosasDao) {
  const router = Router()

  router.get('/', (req, res) => {
    res.send(cosasDao.verTodas())
  })

  router.post('/', (req, res) => {
    cosasDao.agregar(req.body)
    res.send(cosasDao.verTodas())
  })

  return router
}

export { crearRouter }
