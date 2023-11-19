/*
    Crea una función que reciba una serie de arrays como argumentos
    y devuelva uno único ordenado.

    Ejemplo:
        Recibe:
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'],
            ['Vinicius', 'Kane']])
        Devuelve:
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi',
            'Neymar', 'Vinicius']
*/
let lista=[['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'],['Vinicius', 'Kane']];


function sortLists(datos){
    let listaConjunta=[];
    datos.forEach(element => {
        listaConjunta=listaConjunta.concat(element);
    });
    return listaConjunta.sort();
}

console.log(sortLists(lista));