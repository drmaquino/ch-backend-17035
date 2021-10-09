const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    // console.log(peticion)

    const { url, method } = peticion
    console.log(method, url)

    if (url == '/miscosas' && method == 'GET') {
        respuesta.end('accediendo a mis cosas!')
    } else {
        respuesta.end('url desconocida... ')
    }
})

const srvConnection = server.listen(8080, () => {
    console.log(`ya me conecté al puerto ${srvConnection.address().port}`)
})