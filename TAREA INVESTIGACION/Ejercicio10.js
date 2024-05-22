// 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, 
//se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. 
//Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
// ANALISIS DEL REQUERIMIENTO:
// ENTRADA: costoTraje=0.0, porcentajeDescuento= 0.10, IVA=0.0, descuentoTraje=0.0, precioConDescuento=0.0, totalTraje=0.0
// PROCESOS: si costoTraje > 200 entonces
// descuentoTraje= costoTraje * porcentajeDescuento
// si no 
// descuentoTraje= 10
// precioConDescuento= costoTraje - descuentoTraje
// IVA= precioConDescuento * 0.15
// totalTraje= PrecioConDescuento + IVA
// SALIDA: Mostrar costoTraje , descuentoTraje, precioConDescuento, IVA, totalTraje
const read = require('prompt-sync')();
function costoTotalTraje(){
    let costoTraje=0.0, porcentajeDescuento= 0.10, IVA=0.0, descuentoTraje=0.0, precioConDescuento=0.0, totalTraje=0.0
    costoTraje=parseFloat(read("Ingrese el costo del traje: $"))
    if ( costoTraje > 200) {
    descuentoTraje= costoTraje * porcentajeDescuento
    } else {
        descuentoTraje=10
    }
precioConDescuento= costoTraje - descuentoTraje
IVA= precioConDescuento * 0.15
totalTraje= precioConDescuento + IVA
console.log("Precio del traje: $", costoTraje)
console.log("Descuento aplicado: $", descuentoTraje)
console.log("Precio con descuento: $", precioConDescuento)
console.log("IVA (15%): $", IVA)
console.log("Precio final a pagar: $", totalTraje)
}
costoTotalTraje()
