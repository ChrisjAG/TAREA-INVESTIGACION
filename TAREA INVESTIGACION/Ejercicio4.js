// 4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)


const read = require("prompt-sync")()
const write = console.log


function convertirPeso() {
    const libras = parseFloat(read("Ingrese el peso en libras: "))

    const kilogramos = libras * 0.453593
    const gramos = (kilogramos - parseInt(kilogramos)) * 1000

    write("El peso en kilogramos es:", parseInt(kilogramos), "kg")
    write("El peso en gramos es:", parseInt(gramos), "g")
}

convertirPeso()
