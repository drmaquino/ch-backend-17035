// let id = 1
// export function generarId() {
//     return id++
// }

export function generarId() {
  return `${Date.now()}`
}
