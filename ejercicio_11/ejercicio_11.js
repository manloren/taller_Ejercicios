function determinarNumero(numero) {
    if (numero > 0) {
      return "positivo";
    } else if (numero < 0) {
     return "negativo";
    } else {
      return "cero";
    }
  }
  let resultado = determinarNumero(8);
  console.log(resultado); 
  