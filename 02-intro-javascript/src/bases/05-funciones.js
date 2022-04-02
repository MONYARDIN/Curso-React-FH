//FUNCIONES

// const saludar = function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar2('Vegeta'))
console.log(saludar3('Goku'))

const getUser = ()=>{
    return {
        uid: 'ABC123',
        username: 'monyardin',
    }
}

const user = getUser();

console.log(user)


//TAREA 
//1. transformar a una función de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
 const getUsuarioActivo = (nombre)=> ({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Monjardin');
console.log(usuarioActivo)