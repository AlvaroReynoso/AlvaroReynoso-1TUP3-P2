
// 4-De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel superior: Porcentaje>=90%.
// Nivel medio: Porcentaje>=75% y <90%.
// Nivel regular: Porcentaje>=50% y <75%.
// Fuera de nivel: Porcentaje<50%.

let nombre=prompt("Ingrese su nombre")
let cantPreg=prompt("Ingrese la cantidad total de preguntas")
let pregCorrectas=prompt("Ingrese la cantidad de preguntas correctas")

let porcentaje=(pregCorrectas/cantPreg)*100

if(porcentaje>=90){
    document.write("Nivel superior con un total de: ",porcentaje,"%")
}
else if(porcentaje>=75 & porcentaje<90){
    document.write("Nivel medio ",porcentaje,"%")
}
else if(porcentaje>=50 & porcentaje<75){
    document.write("Nivel regular ", porcentaje,"%")
}
else if(porcentaje<50){
    document.write("Fuera de nivel ", porcentaje, "%")    
}    