//Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.
let nota1 = parseFloat(prompt("Ingresar la primera nota"));
let nota2 = parseFloat(prompt("Ingresar la segunda nota"));
let nota3 = parseFloat(prompt("Ingresar la tercera nota"));
// Para calcular el promedio 
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 4) {
    console.log("Regular");
} else {
    console.log ("Reprobado");
}