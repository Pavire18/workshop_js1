/*
        Crea una función que reciba como parámetro un string y devuelva otro,
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let exampleWord='hola';

function convertString(word){
    let letras=word.split('');
    letras.forEach(letra => {
        let posicion=alfabeto.indexOf(letra);
        if(posicion!==-1){
            word=word.replace(letra,posicion);
        }
    });
    return word;
}

console.log(convertString(exampleWord));
