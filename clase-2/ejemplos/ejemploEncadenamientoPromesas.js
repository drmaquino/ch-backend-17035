new Promise((resolve, reject) => {
    resolve(1) // devuelve siempre 1
})
    .then(result => {
        console.log(result) // muestra 1
        return result * 2 // devuelve una promesa con resultado 2
    })
    .then(result => {
        console.log(result) // muestra 2
        return result * 2 // devuelve una promesa con resultado 4
    })
    .then(result => {
        console.log(result) // muestra 4
        return result * 2 // devuelve una promesa con resultado 8
    })
    // el resultado de la promesa final no se usa