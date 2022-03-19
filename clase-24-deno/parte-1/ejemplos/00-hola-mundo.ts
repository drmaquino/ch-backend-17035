let saludo = 'hola mundo';
console.log(saludo)

//--------------------------------------------------------------------

interface IPersona {
    id: number,
    nombre: string,
    edad: number
}

interface IPersonaInput {
    nombre: string,
    edad: number
}

let newId = 0

function crearPersona({ nombre, edad }: IPersonaInput): IPersona {
    return {
        id: newId++,
        nombre,
        edad
    }
}

const personas: IPersona[] = []

personas.push(crearPersona({ nombre: 'fran', edad: 40 }))
personas.push(crearPersona({ nombre: 'marian', edad: 35 }))
// personas.push({ nombre: 'pepe', edad: 15 })

// GET /api/personas/:id
function getPersona(req: { params: { id: string } }, res: any) {
    const id: number = parseInt(req.params.id);
    const buscada = personas.find(p => p.id === id)
    if (buscada) {
        res.json(buscada)
    } else {
        res.sendStatus(404)
    }
}

// POST /api/personas
function postPersona(req: { body: { nombre: string, edad: any } }, res: any) {

    const nombre: string = req.body.nombre
    const edad: number = parseInt(req.body.edad)

    const newPersona: IPersona = crearPersona({ nombre, edad })
    personas.push(newPersona)
}