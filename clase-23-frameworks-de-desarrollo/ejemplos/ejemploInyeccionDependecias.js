// negocio

// Kiosko.js
export class Kiosko {
    constructor(notificarAdmin) {
        this.notificarAdmin = notificarAdmin
    }

    vender(producto) {
        this.notificarAdmin(Date.now(), producto)
        return producto + 'vendido, gracias'
    }
}

// index.js
import { Kiosko } from './Kiosko.js'
import { Notificador } from '/notificadores'

export function crearKiosko() {
    const notificarAdmin = new Notificador()
    return new Kiosko(notificarAdmin)
}

//-----------------------------------------------------------------

// ruteo

// ControladorVentas.js
export class ControladorVentas {
    constructor(kiosko) {
        this.kiosko = kiosko
    }

    post(req, res) {
        const result = this.kiosko.vender(req.body.producto)
        res.json(result)
    }
}

//--------------------------------------------------------------------

// index.js
import { ControladorVentas } from './ControladorVentas.js'
import { Kiosko } from './Kiosko.js'

export function crearControladorVentas() {
    const kiosko = crearKiosko()
    return new ControladorVentas(kiosko)
}

//-----------------------------------------------------------------

class Aplicacion {
    constructor(controladorVentas) {
        app = express()

        app.post('/ventas', controladorVentas.post)

        return app
    }
}

//-----------------------------------------------------------------

function crearApp() {
    const controladorVentas = crearControladorVentas()
    const app = new Aplicacion(controladorVentas)
    return app
}

//-----------------------------------------------------------------

const app = crearApp()

app.start()