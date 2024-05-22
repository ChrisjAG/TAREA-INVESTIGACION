//15.Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor 
//si es par positivo y el ultimo si es impar negativo.

function valorAleatorio(){
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
}
valorAleatorio()