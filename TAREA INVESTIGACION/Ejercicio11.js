// 11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.

const read = require("prompt-sync")()
const write = console.log

function diaSemana() {
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
const numeroDia = parseInt(read("Ingrese el número del día (1 para Domingo, 2 para Lunes, etc.): "))
if (numeroDia >= 1 && numeroDia <= 7) {
    const nombreDia = diasSemana[numeroDia - 1]
    write("El día correspondiente al número", numeroDia, "es", nombreDia)
} else {
    write("Número de día inválido. Por favor, ingrese un número del 1 al 7.")
}
}
diaSemana()