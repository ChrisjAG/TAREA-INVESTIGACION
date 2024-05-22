//Ejercicio18. Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra.

//Entrada: caracter[], presentar(proceso)
//Proceso: ver del arreglo el ultimo caracter y presentarlo siempre y cuando sea una letra
//Salida: presentar el ultimo caracter

const read = require("prompt-sync")();
const write = console.log

function cadenaUltimoc() {
    const cadena1 = "Hola, bienvenido a Visual Studio Code"
    const cadena2 = "Hola, bienvenido a Visual Studio Code, version v120.33" 
    let numero = 0

    write ("cadena.1:", cadena1)
    write ("cadena.2:", cadena2)
    
    write ("Ingrese el numero de la cadena:");
    numero = parseFloat(read())
    
    if (numero === 1) {
        write ("El ultimo caracter es una letra:", cadena1[36])
    }
    else {
        write ("El ultimo caracter no es una letra:", cadena2[53])
    }

}
cadenaUltimoc()