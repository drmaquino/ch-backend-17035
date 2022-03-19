// import PersistenciaMemory from './model/persistencia/personas.js'
import { getPersistenciaMemory } from './model/persistencia/index.js'

// const alumnes = new PersistenciaMemory()
const persistencia1 = getPersistenciaMemory()

// const profesores = new PersistenciaMemory()
const persistencia2 = getPersistenciaMemory()

// console.log(persistencia1)

await persistencia1.agregarPersona('pepe')
await persistencia2.agregarPersona('marian')
// console.log(await persistencia1.obtenerPersonas())

console.log(await persistencia2.obtenerPersonas())
