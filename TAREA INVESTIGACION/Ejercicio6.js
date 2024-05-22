//6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. 
//Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan 
//al doble de la hora de la jornada normal. 
//El porcentaje del seguro social(iess) es del 10% del ingreso total. 
//Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.
// ANALISIS DEL REQUERIMIENTO
//ENTRADA: tarifaHoraNormal = 5, horasNormales = 40, porcentajeIESS = 0.10, horasTrabajadas=0
//sueldoBase=0.0, horasExtra = 0, sueldoHorasExtra = 0, ingresoTotal=0.0, seguroSocial=0.0,sueldoNeto=0.0
//PROCESO: Si horasTrabajadas > horasNormales) entonces
//         horasExtra = horasTrabajadas - horasNormales
//         sueldoHorasExtra = horasExtra * tarifaHoraNormal * 2 
//SALIDA: Mostrar valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.
const read = require('prompt-sync')();
function calcularSalario() {
  let tarifaHoraNormal = 5, horasNormales = 40, porcentajeIESS = 0.10
  let horasTrabajadas = parseFloat(read("Ingrese el número de horas trabajadas en la semana: "))
  let sueldoBase = horasNormales * tarifaHoraNormal
  let horasExtra = 0
  let sueldoHorasExtra = 0

    if (horasTrabajadas > horasNormales) {
        horasExtra = horasTrabajadas - horasNormales
        sueldoHorasExtra = horasExtra * tarifaHoraNormal * 2 
    }
    let ingresoTotal = sueldoBase + sueldoHorasExtra
    let seguroSocial = ingresoTotal * porcentajeIESS
    let sueldoNeto = ingresoTotal - seguroSocial

    console.log("Horas trabajadas: ", horasTrabajadas)
    console.log("Sueldo base (40 horas): $", sueldoBase)
    console.log("Horas extra trabajadas: ", horasExtra)
    console.log("Sueldo por horas extra: $", sueldoHorasExtra)
    console.log("Ingreso total: $", ingresoTotal)
    console.log("Seguro social (IESS): $", seguroSocial)
    console.log("Sueldo neto a recibir: $", sueldoNeto)
}

calcularSalario()