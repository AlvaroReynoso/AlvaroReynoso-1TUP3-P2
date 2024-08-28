// Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:

// Si el promedio es >=7 mostrar "Promocionado".
// Si el promedio es >=4 y <7 mostrar "Regular".
// Si el promedio es <4 mostrar "Reprobado".

let num1=parseFloat(prompt("Ingrese valor 1"))
let num2=parseFloat(prompt("Ingrese valor 2"))
let num3=parseFloat(prompt("Ingrese valor 3"))
let promedio=parseFloat((num1+num2+num3)/3);
if (promedio>=7){
    document.write("Promocionado")
}
else if (promedio>=4 & promedio<7)
{
    document.write("Regular")
}
else if(promedio<4){
    document.write("Reprobado")
}
