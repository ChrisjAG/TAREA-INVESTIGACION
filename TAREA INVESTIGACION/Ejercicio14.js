//Ejercicio14. Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.

//Entrada: direccion = (aleatoria), caracter(proceso)
//Proceso: mostrar direccion y caracter
//Salida: ver la direccion y la ubicacion de los caracteres


const read = require("prompt-sync")();
const write = console.log;


function direcCarac() {
    let direccion = ""
    direccion=read("Ingrese una direccion: ")
    write ("Direccion:", direccion)
    write ("Priemer caracter:", direccion[0])
    write ("Caracter del medio:", direccion[6])
    write ("Ultimo caracter:", direccion[11])
}
direcCarac()