// 3. Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
// Analisis de rquerimiento:
// Entrada: se leen los valores de las variables a, b, c, y d.
// Proceso:se calcula la suma de los valores: suma= a+b+c+d.
//         se calcula el producto de los valores: producto=a*b*c*d.
//         se calcula la media aritmetica: mediaAritmetica=suma/4.
// Salida: se muestra la suma, el producto y la media aritmetica.
// inicia funcion
const read = require("prompt-sync")()
function calcularOperaciones(){
    let var1 = parseFloat(read("Ingrese la primera variable: "))
            let var2 = parseFloat(read("Ingrese la segunda variable: "))
            let var3 = parseFloat(read("Ingrese la tercera variable: "))
            let var4 = parseFloat(read("Ingrese la cuarta variable: "))
            let producto = var1 * var2 * var3 * var4
            let suma = var1 + var2 + var3 + var4
            let media = suma / 4
            console.log(`Producto: ${producto}, Suma: ${suma}, Media: ${media}`)
}
calcularOperaciones()