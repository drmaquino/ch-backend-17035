const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hola desde express')
})

app.get('/cosas', (req, res) => {
    res.send('mis cosassss')
})

const server = app.listen(8080, () => {
    console.log(`ya me conecté al puerto ${server.address().port}`)
})
server.on('error', (error) => {
    console.log('hubo un error...')
    console.log(error)
})