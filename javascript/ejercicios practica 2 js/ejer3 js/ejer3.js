/* Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero. */
 
    let numero = Number(prompt("Ingrese un numero: "));
    if (numero >= 9) {
      document.write("El numero es de dos digito")
    } else {
      document.write("El numero es de un digitos")
    }