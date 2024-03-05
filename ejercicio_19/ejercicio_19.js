let primerNumero = prompt("Ingresa el primer número:");
let segundoNumero = prompt("Ingresa el segundo número:");

// Convertir los valores ingresados a números
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);

if (primerNumero > segundoNumero) {
  alert("El primer número, " + primerNumero + ", es mayor que el segundo número, " + segundoNumero);
} else if (segundoNumero > primerNumero) {
  alert("El segundo número, " + segundoNumero + ", es mayor que el primer número, " + primerNumero);
} 

