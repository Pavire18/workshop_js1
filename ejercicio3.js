/*
        Crea una función que reciba como argumento un array de números
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos:

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

let numeros=[3,3,5,5,5,5,5,6,6,6];
let texto='';

function counter(col){
    let datosNumeros=[{id:col[0], counter:1}];

    for(let i=1; i<col.length; i++){
            let posicion= datosNumeros.findIndex(value => value.id==col[i]);
            if(posicion!=-1){
                datosNumeros[posicion].counter++;

            }else{
                let numero= {id:col[i], counter:1};
                datosNumeros.push(numero);
            }

    }

    datosNumeros.forEach(value => {
        if (value.counter % 2 !== 0) {
            texto += `El numero ${value.id} aparece ${value.counter} veces \n`;
        }
      })
    return texto;
}

console.log(counter(numeros))