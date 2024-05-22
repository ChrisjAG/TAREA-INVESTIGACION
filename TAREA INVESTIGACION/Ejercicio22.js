//22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo 
//o mayor que el segundo
//ANALISIS DEL REQUERIMIENTO
//ENTRADA: nombre1="", nombre2=""
//PROCESO: si nombre1 == nombre2 
//SALIDA:
const read = require("prompt-sync")();

function compararNombres() {
    let nombre1="", nombre2=""
    nombre1 = read("Ingrese el primer nombre: ")
    nombre2 = read("Ingrese el segundo nombre: ")
    if (nombre1 == nombre2) {
        console.log("Los nombres son iguales.")
    } else if (nombre1 < nombre2) {
        console.log("El primer nombre es menor que el segundo.")
    } else {
        console.log("El primer nombre es mayor que el segundo.")
    }
}
compararNombres()