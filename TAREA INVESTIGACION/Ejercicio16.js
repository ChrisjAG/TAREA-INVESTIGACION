//Ejercicio16. Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.

//Entrada: nom = ""(leer), carater(proceso)
//Proceso: leer y ver cual es el primer y ultimo caracter de ese nombre
//Salida: ver nombre y caracteres

const write = console.log;

function nomCarac(){
    nombre1 = "Bernandino"
    nombre2 = "Pancracio"
    nombre3 = "Flugurmina"
    write (nombre1+",","Primer caracter:", nombre1[0]+", Ultimo caracter", nombre1[9])
    write (nombre2+",","Primer caracter:", nombre2[0]+", Ultimo caracter:", nombre2[8])
    write (nombre3+",","Primer caracter:", nombre3[0]+", Ultimo caracter:", nombre3[9])
}
nomCarac();