/*
    Crea una función que reciba un listado de strings y devuelva
    el string diferente al resto.

    Serán strings sin espacios.

    Ejemplo:

     Entrada: [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
     Salida : 'BbBb’

     Entrada: ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba’]
     Salida : 'foo’
*/

let palabras=[ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];

function encontrarDistinto(col){
    let convertedCol=[];
    col.forEach(element => {
        let convertedWord=element.toLowerCase();
        convertedWord=(convertedWord.split('').sort().filter((value, index) =>           convertedWord.split('').sort().indexOf(value) === index).join(''));
        convertedCol.push(convertedWord);
    });
    convertedCol=convertedCol.sort();
    // let aux;
    // convertedCol.forEach(element => {
    //     aux=element
    // });
    console.log(convertedCol);
}
encontrarDistinto(palabras);