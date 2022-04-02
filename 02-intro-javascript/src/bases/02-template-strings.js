//TEMPLATE STRINGS

const nombre = 'Roberto';
const apellido = 'Monjardin';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `Hola ${ nombre } ${ apellido }`;
console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo( nombre ) }`);