// 8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y 
//sino verificar si es un signo de puntuacion ", . ; :" y si no presentar solo el carácter.

const read = require("prompt-sync")()
const write = console.log
function verificarCaracter() {
    const caracter = read("Ingrese un carácter: ")

    if (caracter >= 'a' && caracter <= 'z') {
        write("El carácter está comprendido entre las letras a y z.")
    } else if (caracter >= 'A' && caracter <= 'Z') {
        write("El carácter está comprendido entre las letras A y Z.")
    } else if (caracter === ',' || caracter === '.' || caracter === ';' || caracter === ':') {
        write("El carácter es un signo de puntuación: ", caracter)
    } else {
        write("El carácter ingresado es: ", caracter)
    }
}

verificarCaracter()
