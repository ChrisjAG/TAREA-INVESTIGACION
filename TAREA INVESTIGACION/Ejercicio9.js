// 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando 
//que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos

const read = require("prompt-sync")();
function calcularCostoColas(){
const cantidadColas = parseInt(read("Ingrese la cantidad de colas: "))
let costoTotal
if (cantidadColas < 12) {
    costoTotal = cantidadColas * 0.25
} else {
    costoTotal = cantidadColas * 0.225
}
console.log("El costo total de las colas es: $",costoTotal)
}
calcularCostoColas()
