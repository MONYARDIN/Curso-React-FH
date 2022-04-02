//ARREGLOS

//Un arreglo es una colección de información

// const arreglo = new Array(100);
// arreglo.push(1)

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2)

let arreglo2 = [...arreglo, 5]
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});//callback

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)