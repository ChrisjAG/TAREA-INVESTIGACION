// 17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito



const read = require("prompt-sync")()
const write = console.log
const cadena = (read("Ingrese una cadena: "))


if (!isNaN(parseInt(cadena.charAt(0)))) {
    write("El primer carácter de la cadena es un dígito:")
} else {
    write("El primer carácter de la cadena no es un dígito.")
}
