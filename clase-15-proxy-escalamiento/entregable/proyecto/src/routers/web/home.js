import { Router } from 'express'
import config from '../../config.js'

import path from 'path'

const productosWebRouter = new Router()

productosWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})

productosWebRouter.get('/home', webAuth, (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
        nombre: req.user.nombre,
        foto: req.user.foto,
        email: req.user.email,
        specs: config.getSpecs()
    })
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/productos-vista-test.ejs'), { specs: config.getSpecs() })
})

productosWebRouter.get('/info', (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/info.ejs'), {
        specs: config.getSpecs()
    })
})

function webAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
}

export default productosWebRouter