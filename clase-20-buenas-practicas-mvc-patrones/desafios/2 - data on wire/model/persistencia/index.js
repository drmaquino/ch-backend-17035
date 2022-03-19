import PersistenciaMemory from './personas.js'

const dao = new PersistenciaMemory()

function getPersistenciaMemory() {
  return dao
}

export { getPersistenciaMemory }
