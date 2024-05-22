// 24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos
//ANALISIS DEL REQUERIMIENTO
//ENTRADA: arreglo=[]
//PROCESO: Ingrese los elementos del arreglo separados por comas:
//SALIDA: Mostrar el Mensaje
const read = require('prompt-sync')();
function contarElementosArreglo() {
let arreglo = read("Ingrese los elementos del arreglo separados por comas: ").split(",")
console.log(`El arreglo tiene ${arreglo.length} elementos.`)
}

contarElementosArreglo()