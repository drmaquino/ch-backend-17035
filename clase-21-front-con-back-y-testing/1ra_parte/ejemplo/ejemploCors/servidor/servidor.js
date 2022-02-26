import express from 'express'
import cors from 'cors'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:4000',
  })
)

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

app.get('/mensaje', (req, res) => {
  res.send('el mensaje para mostrar')
})

app.listen(3000)
