
describe('Pruebas en el archivo demo.test.js', ()=>{

    test( 'deben de ser iguales los strings', () =>{
        // const isActive = true;
        
        // if( isActive) {
            //     throw new Error('No esta activo')
            // }
            //1.Inicialización
            const mensaje = 'Hola mundo';
            //2.Estímulo
            const mensaje2 = 'Hola mundo';
            //3. Observar el comportamiento
            expect( mensaje ).toBe( mensaje2 );
            
        })
})