import { Router } from 'express'
import { calcular } from '../../api/randoms.js'

const randomsApiRouter = new Router()

randomsApiRouter.get('/randoms', async (req, res) => {
    const { cant = 100_000_000 } = req.query
    const result = await calcular(cant)
    res.json(result)
})

export default randomsApiRouter