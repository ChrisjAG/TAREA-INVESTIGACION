// Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número
// Analisis de requerimientos:
// Entrada: numero:un numero entero ingresado por el usuario.
// Proceso:calcular el doble del numero: doble= numero*2, calcular el triple del numero: triple=numero*3
// Salida: mostrar el doble y el triple del numero ingresado
// inicio funcion
const read = require("prompt-sync")()
const write = console.log
function calcularDobleTriple(){
    const numero =parseInt(read("Ingrese un numero entero: "))
    const doble=numero*2
    const triple=numero*3

    console.log(`El doble de ${numero} es ${doble}.`)
    console.log(`El triple de ${numero} es ${triple}.`)
}
calcularDobleTriple()