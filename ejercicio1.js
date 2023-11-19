/*
        Crear una función que devuelva el número de vocales
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/
let word ='Hola soy Edu Feliz Navidad';
function counterVocales(word){
  let numVocales=0;
  let col=word.split('');
  col.forEach(value => {
    if(value.match(/[aeiouAEIOU]/g))
      numVocales++;
  })
  return numVocales;
}

console.log(counterVocales(word));