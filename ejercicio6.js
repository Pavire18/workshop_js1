/*
        Crea una función que reciba un array de números, la posición inicial
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/

function sliceCollection(colletion,pos1 = 0,pos2=colletion.length){

    return colletion.slice(pos1,pos2);

}

console.log(sliceCollection([1, 2, 3], 0, 1));