/*
    Crea una función que reciba un listado y mueva todos los 0 al final,
    manteniendo el orden del resto de elementos.

    Ejemplo:
       Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
       Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/
let datos=[1,0,true,0,'hola', 5, 30, 'a'];

function moveCeros(col){
    let countCeros=0;
    datos.forEach((element, index) => {
        if(element===0){
            countCeros++;
            datos.splice(index,index);
        }
    });
    for(i=0;i<countCeros;i++){
      datos.push(0);
    }
  return datos;
}

console.log(moveCeros(datos));