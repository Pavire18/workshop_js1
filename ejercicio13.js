/*
    Crea una función que recibiendo un resultado del tablero del 3 en raya,
    indique si algún jugador ha ganado la partida. Asumimos que recibimos
    un tablero válido

            - 0 - Hueco en blanco
            - 1 - Jugador 1
            - 2 - Jugador 2

    La función devolverá:
        - -1 si nadie ha ganado todavía y el tablero tiene huecos por rellenar
        - 1 si el jugador 1 ha ganado
        - 2 si el jugador 2 ha ganado
        - 0 nadie ha ganado

    Ejemplo:
        Entrada:
        [  [ 0, 2, 1],
           [ 0, 1, 2],
           [ 2, 1, 0] ]

        Salida: -1
*/
let ganador=0;
let tableroEjemplo= [
                [ 1, 1, 2],
                [ 1, 2, 2],
                [ 2, 1, 1]
            ];

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual([ 5, 5, 5, 5, 5]))

function resultadoPartida(tablero){
  let column1=[];
  let column2=[];
  let column3=[];
  let diagonal1=[tablero[0][0],tablero[1][1],tablero[2][2]];
  let diagonal2=[tablero[0][2],tablero[1][1],tablero[2][0]];
    for(let i=0; i<tablero.length; i++){
      //COMPROBAR HORIZONTALMENTE
      if(allEqual(tablero[i])){
        ganador=tablero[i][0];
        break;
      };

    }
    //CREAMOS ARRAYS DE LAS COLUMNAS PARA COMPROBAR
    column1=tablero.map(x=> x[0])
    column2=tablero.map(x=> x[1])
    column3=tablero.map(x=> x[3])



    //COMPROBAR VERTICALMENTE
    ganador=allEqual(column1) && ganador===0 ? column1[0]: ganador;
    ganador=allEqual(column2) && ganador===0 ? column2[0]: ganador;
    ganador=allEqual(column3) && ganador===0 ? column3[0]: ganador;
    ganador=allEqual(diagonal1) && ganador===0 ? diagonal1[0]: ganador;
    ganador=allEqual(diagonal2) && ganador===0 ? diagonal2[0]: ganador;
    if(ganador===0){
        if(column1.includes(0) || column2.includes(0) || column3.includes(0)){
            ganador=-1;
          }else{
            ganador=0;
          }
    }

  //MOSTRAMOS RESULTADO
  if(ganador===0){
    console.log('¡Es un empate!');
  }else if(ganador===-1){
    console.log('¡La partida todavía no ha acabado!');
  }else{
    console.log('El ganador es '+ganador);
  }


}
resultadoPartida(tableroEjemplo);