import Model from '../persistencia/personas.js'

const model = new Model()

/* -------------------------------------- */
/*           HTML/DATA ON WIRE            */
/* -------------------------------------- */
export const obtenerPersonas = async () => {
  return await model.obtenerPersonas()
}

export const agregarPersona = async persona => {
  await model.agregarPersona(persona)
}
