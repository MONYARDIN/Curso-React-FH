//DESESTRUCTURACIÓN DE ARREGLOS  


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras)
console.log(numeros)

//TAREA 
//Desestructura un arreglo
const seState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const [nombre, setNombre] = seState( 'Goku');
console.log(nombre);
setNombre();