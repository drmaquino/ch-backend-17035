// function operar(num1, num2, callback) {
//     const result = callback(num1, num2)
//     return result
// }

const operar = (a, b, op) => op(a, b)

// function sumar(sum1, sum2) {
//     return sum1 + sum2
// }

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

// const result1 = operar(4, 5, sumar)
// const result2 = operar(4, 5, restar)
// const result3 = operar(4, 5, multiplicar)
// const result4 = operar(4, 5, dividir)

// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

// console.log(operar(4, 5, sumar))
// console.log(operar(4, 5, restar))
// console.log(operar(4, 5, multiplicar))
// console.log(operar(4, 5, dividir))

const result1 = operar(4, 5, (a, b) => a + b)
const result2 = operar(4, 5, (a, b) => a - b)
const result3 = operar(4, 5, (a, b) => a * b)
const result4 = operar(4, 5, (a, b) => a / b)

const result5 = operar(4, 5, (a, b) => a % b)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

console.log(result5)