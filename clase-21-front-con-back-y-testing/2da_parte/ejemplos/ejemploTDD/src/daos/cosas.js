const contenedorCosas = []

export function crearDao() {
  const cosasDao = {
    agregar: cosa => {
      contenedorCosas.push(cosa)
    },
    verTodas: () => {
      return contenedorCosas
    },
  }
  return cosasDao
}
