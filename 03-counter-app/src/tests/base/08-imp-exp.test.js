import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', ()=>{
    test('Debe de retornar un heroe por Id ', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        
        const heroeData = heroes.find(h => h.id === id );
        expect( heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si heroe no existe ', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
        
        expect( heroe).toBe(undefined);
    })

    test('Debe de retornar un arreglo con los heroes de DC', ()=>{
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        const heroeOwner = heroes.filter((heroe) => heroe.owner === owner);
        expect(heroes).toEqual(heroeOwner);
    })

    test('Debe de retornar un arreglo con los heroes de Marvel', ()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        const heroeslength = heroes.length;
        console.log(heroeslength);
        expect(heroeslength).toBe(2);
    })
    
})