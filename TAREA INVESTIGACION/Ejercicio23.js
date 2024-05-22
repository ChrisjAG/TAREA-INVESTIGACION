//Ejercicio23. Dado una cadena indicar cuantos elementos tiene, sin usar ciclos.

//Entrada: cadena(leer), indicar(proceso)
//Proceso: indicar cuantos elementos tiene esa cadena
//Salida: mostrar el numero de los elementos de la cadena

const read = require("prompt-sync")();
const write = console.log;

function numElementos() {

    let cadena = "''El sacrificio del hoy es el exito del mañana.''";
    let elementos = 44

    write (cadena)
    write ("La cadena tiene", elementos + " elementos.")

}
numElementos();