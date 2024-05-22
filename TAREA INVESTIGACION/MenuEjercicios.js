const read = require("prompt-sync")();

function menuEjercicios() {
    console.log("Menú Ejercicios")
    console.log("1) Algoritmo que transforme de grados Celsius a Fahrenheit")
    console.log("2) Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")
    console.log("3) Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
    console.log("4) Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos.")
    console.log("5) Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
    console.log("6) Calcular sueldo, sobretiempo, ingreso total, seguro social y neto a recibir.")
    console.log("7) Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.")
    console.log("8) Leer un carácter y deducir si está comprendido entre 'a' y 'z' o es un signo de puntuación.")
    console.log("9) Determinar cuánto se debe pagar por x cantidad de colas.")
    console.log("10) Calcular descuento en trajes y precio final con IVA.")
    console.log("11) Dado un día en número, presentar el nombre de ese día.")
    console.log("12) Dado un mes en número, presentar el nombre de ese mes.")
    console.log("13) Dado 5 nombres almacenarlos en un arreglo y presentarlos desde el último al primero.")
    console.log("14) Presentar dirección, primer, medio y último carácter.")
    console.log("15) Almacenar 5 valores aleatorios en un arreglo y verificar si el primero es par positivo y el último impar negativo.")
    console.log("16) Añadir 3 nombres a un arreglo y presentar el primer y último carácter de cada nombre.")
    console.log("17) Presentar el primer carácter de una cadena si es un dígito.")
    console.log("18) Presentar el último carácter de una cadena si es una letra.")
    console.log("19) Presentar el primer carácter de una cadena si es una vocal.")
    console.log("20) Presentar el carácter de en medio si es un carácter de puntuación.")
    console.log("21) Comparar dos caracteres.")
    console.log("22) Comparar dos nombres.")
    console.log("23) Indicar cuántos elementos tiene una cadena sin usar ciclos.")
    console.log("24) Indicar cuántos elementos tiene un arreglo sin usar ciclos.")

    let opcion = parseInt(read("Elija opción [1…24]: "))

    switch (opcion) {
        case 1:
            console.log("Ejercicio 1: Transformar de grados Celsius a Fahrenheit")
            let celsius = parseFloat(read("Ingrese los grados Celsius: "))
            let fahrenheit = (celsius * 9/5) + 32
            console.log(`Grados Fahrenheit: ${fahrenheit}`)
            break
        case 2:
            console.log("Ejercicio 2: Doble y triple de un número entero")
            const numero =parseInt(read("Ingrese un numero entero: "))
            const doble=numero*2
            const triple=numero*3
        
            console.log(`El doble de ${numero} es ${doble}.`)
            console.log(`El triple de ${numero} es ${triple}.`)
            break
        case 3:
            console.log("Ejercicio 3: Producto, suma y media aritmética de 4 variables")
            let var1 = parseFloat(read("Ingrese la primera variable: "))
            let var2 = parseFloat(read("Ingrese la segunda variable: "))
            let var3 = parseFloat(read("Ingrese la tercera variable: "))
            let var4 = parseFloat(read("Ingrese la cuarta variable: "))
            let producto = var1 * var2 * var3 * var4
            let suma = var1 + var2 + var3 + var4
            let media = suma / 4
            console.log(`Producto: ${producto}, Suma: ${suma}, Media: ${media}`)
            break
        case 4:
            console.log("Ejercicio 4: Convertir peso de libras a kilogramos y gramos")
            let libras = parseFloat(read("Ingrese el peso en libras: "));
            let kilogramos = libras * 0.453593;
            let gramos = kilogramos * 1000;
            console.log(`Kilogramos: ${kilogramos}, Gramos: ${gramos}`)
            break
        case 5:
            console.log("Ejercicio 5: Resolver expresión matemática")
            function calcularExpresion(a, b, c){
                const part1 = Math.sin(a) + Math.cos(b)
                const part2 = Math.trunc(a) % 2;
                const part3 = Math.sqrt(Math.pow(a, 3))
                const part4 = a*b+c;
                const x = part1 * part2 + part3 / part4
                return x
            }
            // ejemplo de uso 
            const a = 2; //
            const b = 1; // 
            const c = 3; //
            const resultado = calcularExpresion(a, b, c)
            console.log("El valor de x es:", resultado)            
            break
        case 6:
            console.log("Ejercicio 6: Calcular sueldo, sobretiempo, ingreso total, seguro social y neto a recibir")
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
            break
        case 7:
            console.log("Ejercicio 7: Comparar dos números con condiciones específicas")
            const numero1 = parseInt(read("Ingrese el primer numero: "))
    const numero2 = parseInt(read("Ingrese el segund numero: "))
    if (numero1 % 2 === 0 && numero2 % 2 !== 0) {
        console.log(`El mayor numero es: ${Math.max(numero1, numero2)}`)
    } else {
        console.log("El primer numero debe ser par y el segundo impar para aplicar la condicion.")
    }
            break
        case 8:
            console.log("Ejercicio 8: Verificar carácter")
            const caracter = read("Ingrese un carácter: ")
            if (caracter >= 'a' && caracter <= 'z') {
                write("El carácter está comprendido entre las letras a y z.")
            } else if (caracter >= 'A' && caracter <= 'Z') {
                write("El carácter está comprendido entre las letras A y Z.")
            } else if (caracter === ',' || caracter === '.' || caracter === ';' || caracter === ':') {
                write("El carácter es un signo de puntuación: ", caracter)
            } else {
                write("El carácter ingresado es: ", caracter)
            }
            break
        case 9:
            console.log("Ejercicio 9: Calcular costo de colas")
            const cantidadColas = parseInt(read("Ingrese la cantidad de colas: "))
            let costoTotal
            if (cantidadColas < 12) {
            costoTotal = cantidadColas * 0.25
            } else {
            costoTotal = cantidadColas * 0.225 
            }
             console.log("El costo total de las colas es: $",costoTotal)
            break
        case 10:
            console.log("Ejercicio 10: Calcular descuento en trajes y precio final con IVA")
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
            break
        case 11:
            console.log("Ejercicio 11: Día de la semana")
            const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            const numeroDia = parseInt(read("Ingrese el número del día (1 para Domingo, 2 para Lunes, etc.): "))
            if (numeroDia >= 1 && numeroDia <= 7) {
                const nombreDia = diasSemana[numeroDia - 1]
                write("El día correspondiente al número", numeroDia, "es", nombreDia)
            } else {
                write("Número de día inválido. Por favor, ingrese un número del 1 al 7.")
            }
            break
        case 12:
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
            break
        case 13:
            console.log("Ejercicio 13: Presentar nombres en orden inverso")
            const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"]
            console.log("Primer nombre:", nombres[4])
            console.log("Segundo nombre:", nombres[3])
            console.log("Tercer nombre:", nombres[2])
            console.log("Cuarto nombre:", nombres[1])
            console.log("Último nombre:", nombres[0])
            break
        case 14:
            console.log("Ejercicio 14: Dirección y caracteres")
            let direccion = read("Ingrese una dirección: ")
            let primerCaracter = direccion.charAt(0)
            let medioCaracter = direccion.charAt(Math.floor(direccion.length / 2))
            let ultimoCaracter = direccion.charAt(direccion.length - 1)
            console.log(`Dirección: ${direccion}, Primer carácter: ${primerCaracter}, Carácter del medio: ${medioCaracter}, Último carácter: ${ultimoCaracter}`)
            break
        case 15:
            console.log("Ejercicio 15: Valores aleatorios en un arreglo")
            let numeros=[]
            valor=parseInt(Math.random() * 100)
            console.log(valor)
            numeros.push(parseInt(Math.random() * 100))
            numeros.push(parseInt(Math.random() * 100))
            numeros.push(parseInt(Math.random() * 100))
            numeros.push(parseInt(Math.random() * 100))
            numeros.push(parseInt(Math.random() * 100))
            console.log(numeros)
            if (numeros [0] > 0 && numeros [0] % 2 ==0) {
            console.log("El primer valor es par positivo:", numeros[0])
            } else  {
            (numeros [4] < 0 && numeros [4] % 3 ==0)
            console.log("El último valor es impar negativo:", numeros[4])
            }
            break
        case 16:
            console.log("Ejercicio 16: Añadir 3 nombres a un arreglo y presentar el primer y último carácter de cada nombre")
            let arregloNombres = []
            for (let i = 0; i < 3; i++) {
                arregloNombres.push(read(`Ingrese el nombre ${i + 1}: `))
            }
            arregloNombres.forEach(nombre => {
                console.log(`Nombre: ${nombre}, Primer carácter: ${nombre.charAt(0)}, Último carácter: ${nombre.charAt(nombre.length - 1)}`)
            })
            break
        case 17:
            console.log("Ejercicio 17: Presentar el primer carácter si es un dígito")
            let cadena1 = read("Ingrese una cadena: ")
            if (!isNaN(cadena1.charAt(0))) {
                console.log(`El primer carácter es un dígito: ${cadena1.charAt(0)}`)
            } else {
                console.log("El primer carácter no es un dígito.")
            }
            break
        case 18:
            console.log("Ejercicio 18: Presentar el último carácter si es una letra")
            let cadena2 = read("Ingrese una cadena: ")
            let ultimoChar = cadena2.charAt(cadena2.length - 1)
            if (/[a-zA-Z]/.test(ultimoChar)) {
                console.log(`El último carácter es una letra: ${ultimoChar}`)
            } else {
                console.log("El último carácter no es una letra.")
            }
            break
        case 19:
            console.log("Ejercicio 19: Presentar el primer carácter si es una vocal")
            let cadena3 = read("Ingrese una cadena: ");
            let primerChar = cadena3.charAt(0).toLowerCase();
            if ("aeiou".includes(primerChar)) {
                console.log(`El primer carácter es una vocal: ${primerChar}`)
            } else {
                console.log("El primer carácter no es una vocal.")
            }
            break
        case 20:
            console.log("Ejercicio 20: Presentar el carácter de en medio si es un carácter de puntuación")
            let cadena4 = read("Ingrese una cadena: ")
            let medioChar = cadena4.charAt(Math.floor(cadena4.length / 2))
            if (";:.,,".includes(medioChar)) {
                console.log(`El carácter de en medio es un signo de puntuación: ${medioChar}`)
            } else {
                console.log("El carácter de en medio no es un signo de puntuación.")
            }
            break
        case 21:
            console.log("Ejercicio 21: Comparar dos caracteres")
            let char1 = read("Ingrese el primer carácter: ")
            let char2 = read("Ingrese el segundo carácter: ")
            if (char1 === char2) {
                console.log("Los caracteres son iguales.")
            } else if (char1 < char2) {
                console.log(`${char1} es menor que ${char2}`)
            } else {
                console.log(`${char1} es mayor que ${char2}`)
            }
            break
        case 22:
            console.log("Ejercicio 22: Comparar dos nombres")
            let nombre1 = read("Ingrese el primer nombre: ")
            let nombre2 = read("Ingrese el segundo nombre: ")
            if (nombre1 === nombre2) {
                console.log("Los nombres son iguales.");
            } else if (nombre1 < nombre2) {
                console.log(`${nombre1} es menor que ${nombre2}`)
            } else {
                console.log(`${nombre1} es mayor que ${nombre2}`)
            }
            break
        case 23:
            console.log("Ejercicio 23: Indicar cuántos elementos tiene una cadena sin usar ciclos")
            let cadena5 = read("Ingrese una cadena: ")
            console.log(`La cadena tiene ${cadena5.length} elementos.`)
            break
        case 24:
            console.log("Ejercicio 24: Indicar cuántos elementos tiene un arreglo sin usar ciclos")
            let arreglo = read("Ingrese los elementos del arreglo separados por comas: ").split(",")
            console.log(`El arreglo tiene ${arreglo.length} elementos.`)
            break
        default:
            console.log("Opción no válida. Por favor, elija una opción entre 1 y 24.")
    }
}

menuEjercicios()
