/*Realizar un programa que lea por teclado dos números,
        si el primero es mayor al segundo informar su suma y diferencia, 
        en caso contrario informar el producto y la división 
       del primero respecto al segundo. */
       let numero1 = parseInt(prompt("Ingrese el primer numero: "));
       let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
       if (numero1 > numero2) {
           document.write("Numero1 es mayor que numero2: La suma: ", numero1 + numero2);
           document.write("<br>");
           document.write("Su diferencia: ", numero1 - numero2);
       } else {
           document.write(
               "Numero1 es menor que numero2: El producto: ",
               numero1 * numero2
           );
           document.write("<br>");
           document.write("Su división: ", numero1 / numero2);
       }