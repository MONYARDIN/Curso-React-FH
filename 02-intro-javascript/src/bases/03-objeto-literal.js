//OBJETOS LITERALES

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 23452345,
        lat: 14.3453,
        lng: 34.563452
    }
};


const persona2 = {...persona};//Elspread operator puede servir para clonar un objeto
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2)