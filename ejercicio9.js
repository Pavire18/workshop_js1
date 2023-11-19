/*
        Tenemos una flota de vehículos y con las nuevas restricciones de
/*
        Crea una función que reciba la lista de regalos de los reyes magos
        y la ordene según la propiedad elegida.

        Ejemplo:
            Entrada:
                    ([{nombre: 'Barbie', categoria: 'muñecas' },
                    {nombre: 'Lego', categoria:'construcción' },
                    {nombre: 'Fifa2023', categoria:'videojuego' }], 'nombre');

            Salida:
                    [{nombre: 'Barbie', categoria: 'muñecas' },
                    {nombre: 'Fifa2023', categoria:'videojuego' }
                    {nombre: 'Lego', categoria:'construcción' }]
*/
let listaRegalos=[{nombre: 'Barbie', categoria: 'muñecas' },
    {nombre: 'Lego', categoria:'construcción' },
    {nombre: 'Fifa2023', categoria:'videojuego' }];

function sortList(regalos,propiedad){
let ordenada=regalos.sort((a, b) => (a[propiedad]>b[propiedad] ? 1 : -1));
  console.log(ordenada);
}
sortList(listaRegalos,'nombre');