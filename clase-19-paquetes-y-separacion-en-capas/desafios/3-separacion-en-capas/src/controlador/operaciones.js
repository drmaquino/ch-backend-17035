import {
  sumar,
  restar,
  multiplicar,
  dividir,
  listar as listarNeg,
} from '../negocio/operaciones.js'

const suma = async (req, res) => {
  let { a, b } = req.query
  const result = await sumar(Number(a), Number(b))
  res.send(`La suma de ${a} y ${b} es ${result}`)
}

const resta = async (req, res) => {
  let { a, b } = req.query
  const result = await restar(Number(a), Number(b))
  res.send(`La resta de ${a} y ${b} es ${result}`)
}

const mult = async (req, res) => {
  let { a, b } = req.query
  const result = await multiplicar(Number(a), Number(b))
  res.send(`La mult de ${a} y ${b} es ${result}`)
}

const div = async (req, res) => {
  let { a, b } = req.query
  const result = await dividir(Number(a), Number(b))
  res.send(`La div de ${a} y ${b} es ${result}`)
}

const listar = async (req, res) => {
  const result = await listarNeg()
  res.json(result)
}

export default {
  suma,
  resta,
  mult,
  div,
  listar,
}
