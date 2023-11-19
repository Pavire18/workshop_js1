/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

function sumaMultiplos(num){
    let result=0;
    for(let i=1; i<num; i++){
      if(i % 3==0 || i % 5==0){
        result+=i;
        console.log(i);
      }
    }
    return result;
  }
  console.log(sumaMultiplos(10));