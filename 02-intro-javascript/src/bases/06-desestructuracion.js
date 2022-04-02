//DESESTRUCTURACIÓN DE OBJETOS 
//Asignación destructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
}

//const { nombre, edad, clave } = persona;

//console.log(nombre, edad, clave)

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const Context = ({clave, nombre, edad, rango = 'Capitan'})=>{
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave, 
        anios: edad,
        latlng:{
            lat: 14.345245,
            lng: 212.34524,
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng}} = Context( persona);
console.log(nombreClave, anios);
console.log(lat, lng);