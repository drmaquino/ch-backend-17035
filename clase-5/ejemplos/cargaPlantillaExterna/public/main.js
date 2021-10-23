// fetch('/plantilla.txt')
//     .then(response => response.text())
//     .then(templateStr => {
//         const template = Handlebars.compile(templateStr)
//         const context = {
//             nombre: 'coder',
//             apellido: 'house',
//             edad: 25,
//             email: 'coder@house',
//             telefono: '12345678'
//         }
//         const html = template(context)
//         document.querySelector('span').innerHTML = html
//     })

async function render() {
    const response = await fetch('/plantilla.txt')
    const templateStr = await response.text()

    const template = Handlebars.compile(templateStr)
    const context = {
        nombre: 'coder',
        apellido: 'house',
        edad: 25,
        email: 'coder@house',
        telefono: '12345678'
    }
    const html = template(context)
    document.querySelector('span').innerHTML = html
}

render()
