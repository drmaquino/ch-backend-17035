import { fork } from 'child_process'
import path from 'path'

function calcular(cant) {
    return new Promise((resolve, reject) => {
        const forked = fork(path.resolve(process.cwd(), 'scripts/calcularRandoms.js'))

        forked.on('message', mensaje => {
            if (mensaje == 'ready') {
                forked.send(cant)
            } else {
                resolve(mensaje)
            }
        })
    })
}

export { calcular }