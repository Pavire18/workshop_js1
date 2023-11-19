/*
        Crea una función que reciba un listado de jugadores con el número de
        billetes de cada cantidad que tienen y devuelva el jugador con más dinero.

        No habrá más de un jugador que tenga el mayor número de billetes

        Ejemplo:
       Entrada:
            [{nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
            {nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
                {nombre: 'Gon', , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

            Salida:
                Gon
*/

let jugadores=[
    {nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
    {nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
    {nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 }];

function getWinner(players){
    let winner;
    let dineroAux=0;
    players.forEach(player => {
        dinero=(player.billetesDe5*5)+(player.billetesDe10*10)+(player.billetestDe50*50);
        if(dinero>dineroAux){
            dineroAux=dinero;
            winner=player.nombre;
        }
    });
    return winner;
}

console.log(getWinner(jugadores));