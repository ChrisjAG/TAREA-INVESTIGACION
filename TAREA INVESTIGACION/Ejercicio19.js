//Ejercicio19. Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.

//Entrada: cadena =[](leer), ver si es una vocal(proceso)
//Proceso: ver si el primer caracter es una vocal o no 
//Salida: presentar el primer caracter si es una vocal

const read = require("prompt-sync")();
const write = console.log

function cadenaUltimoc() {
    const cadena1 = "Uno, es el primer numero de la infinita cantidad de numeros que hay."
    const cadena2 = "1, es el primer numero de la infinita cantidad de numeros que hay." 
    let vocal = 0

    write ("cadena.1:", cadena1)
    write ("cadena.2:", cadena2)
    
    write ("Ingrese el numero de la cadena:");
    vocal = parseFloat(read())
    
    if (vocal === 1) {
        write ("El primer caracter si es una vocal:", cadena1[0])
    }
    else {
        write ("El primer caracter no es una voal:", cadena2[0])
    }

}
cadenaUltimoc()