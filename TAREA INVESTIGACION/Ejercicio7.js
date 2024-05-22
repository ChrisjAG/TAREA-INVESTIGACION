// 7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar.
// Analisis de requerimientos:
// Entrada: costoTraje: el costo del traje (numero decimal)
//          porcentajeDescuento: prcentaje de descuento(0.10 para el 10%)
//          IVA: impueso al valor agregado(15%)
//          descuentoTraje: Descuento aplicado al traje (inicialmente 0)
//          precioConDescuento: precio del traje despues del descuento(inicialmente 0)
//          totalTraje: precio final a pagar(inicialmente 0)
// Proceso: si costoTraje es mayor que 200: calcular descuentoTraje como costoTraje*porcentajeDescuento.
//          sino:
//              establecer descuentoTraje en 10.
//          calcular precioConDescuento como costoTraje-descuentoTraje
//          calculaar el IVA como precioConDescuento*IVA
//          calcular totalTraje como precioConDescuento+IVA.
// Salida: mostrar los siguientes valores: costo del traje
//         descuento aplicado
//         precio con descuento
//         IVA(15%)
//         precio final a pagar
//inicia funcion
const read = require("prompt-sync")()
const write = console.log
function encontrarMayorParImpar() {
    const numero1 = parseInt(read("Ingrese el primer numero: "))
    const numero2 = parseInt(read("Ingrese el segund numero: "))
    if (numero1 % 2 === 0 && numero2 % 2 !== 0) {
        console.log(`El mayor numero es: ${Math.max(numero1, numero2)}`)
    } else {
        console.log("El primer numero debe ser par y el segundo impar para aplicar la condicion.")
    }
}
encontrarMayorParImpar()