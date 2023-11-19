/*
    Crea una función que  reciba un array de números y
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/
let numeros=[10,1,20,3,16,8,10];

function findNumber(col){
    let result=[];
    col.forEach((element, index) => {
        if(element===index){
            result.push(element);
        }
    });
    return result;
}

console.log(findNumber(numeros));