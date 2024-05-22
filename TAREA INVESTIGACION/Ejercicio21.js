//Ejercicio21. Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.

// Analisis de requerimentos:
// Entrada: numero1=""(leer), nombre2=""(leer)
// los datos o variables del problema
// Proceso: Si (nombre1 === nombre2) entonces
//       comparacion="iguales"
//    sino si (nombre1 > nombre2) entonces
//       escribir"el primer nombre es mayor"
//    sino
//       escribir"el segundo nombre es mayor"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: escribir("gracias por ingresar")


const read = require('prompt-sync')();
const write = console.log;

function compararNumeros() {
   let numero1 = 0, numero2 = 0
   write("Ingrese el primer nombre:")
   numero1 = parseFloat(read())
   write("Ingrese el segundo nombre:")
   numero2 = parseFloat(read())
   if (numero1 === numero2) {
      write("Son iguales")
   } else if (numero2 > numero1) {
      write ("el primer numero es mayor")
   } else {
      write("el segundo numero es mayor")
   }
   write("gracias por ingresar")
}

compararNumeros();