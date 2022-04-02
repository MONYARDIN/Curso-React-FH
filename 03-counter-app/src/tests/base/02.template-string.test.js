import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', ()=>{
    
    
    test('prueba en el método getSaludo debe de retornar hola fernando', () => {
    
        const nombre = 'Fernando';
        const saludo = getSaludo( nombre );

        expect ( saludo ).toBe( 'Hola ' + nombre + '!');
        console.log(saludo)
    })
    //getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe retornar Hola Carlos', ()=>{
        const saludo = getSaludo();
        expect ( saludo ).toBe('Hola Carlos!');
    })
})