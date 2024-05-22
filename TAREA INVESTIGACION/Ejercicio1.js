// 1. Algoritmo que transforme de grados Celsius a Fahrenheit
//ANALISIS DEL REQUERIMIENTO
//Formula para conversion de Celsius a Fahrenheit F=Celsius* 9/5 +32
//ENTRADA: celsius=0.0, fahrenheit=0.0 
//PROCESO: fahrenheit=celsius*9/5 +32
//SALIDA: Mostrar el mensaje Temperatura en Fahrenheit
const read = require('prompt-sync')();
function conversionGrados(){
    let celsius=0.0, fahrenheit=0.0
    celsius=parseFloat(read("Ingrese temperatura en gradios Celsius: "))
    fahrenheit= celsius * 9/5 + 32
    console.log("Los grados celsius convertidos a grados fahrenheit son:" ,fahrenheit)
    console.log("Vuelva pronto")
}
conversionGrados()
