function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num) // 3
    setTimeout(cb, 100) // 4
}

console.log('inicio de tareas'); // 1
hacerTarea(1, () => { // 2
    hacerTarea(2, () => { // 6
        hacerTarea(3, () => { // 7
            hacerTarea(4, () => { // 8
                console.log('fin de tareas') // 9
            })
        })
    })
})

console.log('otras tareas ...') // 5
