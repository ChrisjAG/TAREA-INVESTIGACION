// 20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”
// Analisis de requerimientos:
// Entrada: cadena: la dena proporcionada por el usuario
// Proceso: verificar si la longitud de la cadna es par.
//          si la longitud es par: calcular el indice de la mitad de la cadena
//          obtener el caracter en ese indice
//          verificar si el caracter esta en l lista de caracteres de puntuacion (p. ej., ;, :, ., ,)
//          si la longitud no es par, mostrar un mensaje de advertencia.
// Salida: mostrar el caracter de en medio si cumple con las condiciones(es par y esta en la lista de caracteres de puntuacion).
//         de lo contrario, mostrar un mensaje indicando que no es un caracter de puntuacion.
//inicia funcion
const read = require("prompt-sync")()
const write = console.log
function encontrarCaracterDeEnMedio(cadena) {
    const carateresPuntuacion = [';', ':', '.', ','];
    const longitudCadena  = cadena.length;
    if (longitudCadena % 2 === 0) {
        const indiceMitad = longitudCadena / 2;
        const caracterEnMedio = cadena.charAt(indiceMitad);
        if (caracteresPuntuacion.includes(caracterEnMedio)) {
            console.log(`El caracter de en medio es: "${caracterEnMedio}"`);
        } else {
            console.log("El caracter de en medio no es un caracter de puntuacion.");
        }
    } else {
        console.log("La cadena debe tener una longitud par para encontrar el caracter de en medio.");
    }
}
const cadenaIngresada = read("Ingresenuna cadena: ")
encontrarCaracterDeEnMedio(cadenaIngresada)