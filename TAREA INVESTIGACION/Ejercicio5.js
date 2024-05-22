// 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
//Analisis de requerimientos:
// Entrada: a, b,, y c: Son los valores de la variable.
// Proceso:calcular cada parte de la expresion: sen(a)=El seno de a.
//         cos(b)= El coseno de b.
//         trunc(a) mod 2= El valor truncado de a modulo 2.
//         raiz(a^3)= La raiz cuadrada de a elevado a la tercera potencia.
//         (a*b+c)= la suma de a*b y c.
//         combinamos todas estas partes segun la expresion dada. 
// Salida: El valor de x calculado segun la expresion.
// inicio funcion
const read = require("prompt-sync")()
const write = console.log
function calcularExpresion(a, b, c){
    const part1 = Math.sin(a) + Math.cos(b)
    const part2 = Math.trunc(a) % 2;
    const part3 = Math.sqrt(Math.pow(a, 3))
    const part4 = a*b+c;
    const x = part1 * part2 + part3 / part4
    return x
}
// ejemplo de uso 
const a = 2; //
const b = 1; // 
const c = 3; //
const resultado = calcularExpresion(a, b, c)
console.log("El valor de x es:", resultado)

