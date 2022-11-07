function sumarNumeros(num1, num2) {
  return num1 + num2;
}

function restarNumeros(num1, num2) {
  return num1 - num2;
}

function calcularFormula(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(sumarNumeros(1, 3));
console.log(restarNumeros(1, 4));
console.log(calcularFormula(1, 3, restarNumeros));

let accionPulsada = null;
let sumarPulsado = false;

// onclick
accionPulsada = sumarNumeros;

console.log(calcularFormula(1, 5, accionPulsada));
//
function igualPulsado(num1, num2) {
  if (sumarPulsado) {
    return sumarNumeros(num1, num2);
  }
}
