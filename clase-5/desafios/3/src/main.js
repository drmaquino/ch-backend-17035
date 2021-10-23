const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index.hbs'
}))

app.set('views', './views')

app.get('/', (req, res) => {
  res.render('datos.hbs', {
    nombre: 'coder',
    apellido: 'house',
    edad: 25,
    email: 'coder@house',
    telefono: '12345678'
  })
})

app.listen(8080)