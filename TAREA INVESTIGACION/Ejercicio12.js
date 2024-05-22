// 12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos

const read = require("prompt-sync")()
const write = console.log
function Meses() {
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const numeroMes = parseInt(read("Ingrese el número del mes (1 para Enero, 2 para Febrero, etc.): "))
if (numeroMes >= 1 && numeroMes <= 12) {
    const nombreMes = meses[numeroMes - 1]
    write("El mes correspondiente al número", numeroMes, "es", nombreMes)
} else {
    write("Número de mes inválido. Por favor, ingrese un número del 1 al 12.")
}
}
Meses()