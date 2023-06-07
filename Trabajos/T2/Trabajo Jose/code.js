var miVariable = 100;
var valorFormateado = miVariable.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log(valorFormateado); // "$100.00"



let money = 1000.5

let cambio = money.toLocaleString('es-CO', {style: 'currency', currency: 'COP' });
console.log(cambio);




/* Tasa de cambio */
let tasaCambio = money * 4200

let nCambio = tasaCambio.toLocaleString('es-CO', {style: 'currency', currency:'COP'});
console.log(nCambio);



let palabra = "$200"

palabra = parseInt(palabra.slice(1));
console.log(palabra + 100);