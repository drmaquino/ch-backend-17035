// setTimeout(
//     () => {
//         console.log('pasaron 2 segundos')
//     },
//     2000
// )

// let veces = 10

const intervalo1 = setInterval(
    () => {
        console.log('cada medio segundo')
        // veces--
        // if (veces == 0) clearInterval(intervalo)
    },
    500
)

const intervalo2 = setInterval(
    () => {
        console.log('cada un segundo')
        // veces--
        // if (veces == 0) clearInterval(intervalo)
    },
    1000
)

setTimeout(() => { clearInterval(intervalo1) }, 4000)

console.log('esto se muestra al toque!')