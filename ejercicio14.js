/*
Crea una función que reciba el tablero del sudoku y devuelva true/false en función de si es válido o no:

validarSolucion([
  [5, 3, 4,   6, 7, 8,   9, 1, 2],
  [6, 7, 2,   1, 9, 5,   3, 4, 8],
  [1, 9, 8,   3, 4, 2,   5, 6, 7],

  [8, 5, 9,   7, 6, 1,   4, 2, 3],
  [4, 2, 6,   8, 5, 3,   7, 9, 1],
  [7, 1, 3,   9, 2, 4,   8, 5, 6],

  [9, 6, 1,   5, 3, 7,   2, 8, 4],
  [2, 8, 7,   4, 1, 9,   6, 3, 5],
  [3, 4, 5,   2, 8, 6,   1, 7, 9]
]); // => true
*/
let prueba=[
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

function validarSolucion(partida){
    let valida=true;
    for (let i = 0; i < partida.length; i++) {//FILAS
      //console.log(partida[i].sort());
        for (let j = 0; j < partida[i].length; j++) {//VALORES FILAS
            if(i===0){
                //COMPROBAR COLUMNAS
                let column=partida.map(x=> x[j]).sort();
                for (let k = 0; k < column.length; k++) {
                    if(column[k]!==k+1){
                      valida=false;
                      break;
                    }
                }
            }
        }
        //COMPROBAR FILAS
            let fila=partida[i];
            for(let l=0; l < fila.length; l++){
              if(fila.sort()[l]!==l+1){
              valida=false;
              break;
             }
            }
    }
  return valida;
}

validarSolucion(prueba);