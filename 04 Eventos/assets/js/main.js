// let conejoTxt = document.querySelector('#conejos');
// let conejos = 0;
// function unConejoMas(){
//     conejoTxt.innerHTML = ++conejos;
// }
// let btnReset = document.createElement('button');
// btnReset.innerText = 'Reiniciar Cuenta';
// document.body.appendChild(btnReset);

// btnReset.addEventListener('mousedown', () => {
//     conejoTxt.innerHTML = 0;
// });

// let input = document.createElement('input');
// input.setAttribute('type', 'button');
// input.setAttribute('id', 'btnSaludo');
// input.setAttribute('value', 'Salúdame');
// document.body.append(input);

// input.addEventListener('mousedown', ()=> {
//     alert('¡Me has saludado!')
// });

// // Funcion anonima 
// input.onclick = function() {
//     alert('Soy anonimo')
// }

// let inputGetName = document.createElement('input');
// inputGetName.style.width = "100px";
// inputGetName.style.height = "30px";
// inputGetName.setAttribute('type', 'text');
// document.body.append(inputGetName);

// let btnSaludito = document.createElement('button');
// btnSaludito.innerHTML = 'Saludar Usuario';
// document.body.append(btnSaludito);

// btnSaludito.addEventListener( 'mousedown', () => {
//     alert(inputGetName.value);
// });

// Proceso de suma de deos valores de dos tipos de input diferentes

// Primer input
let input1 = document.createElement('input');
input1.setAttribute('type', 'number');

// Segundo input
let input2 = document.createElement('input');
input2.setAttribute('type', 'number');

// Parte delm resultado
let btnR = document.createElement('button');
btnR.innerHTML = 'Resultado';

let inputR = document.createElement('input');
inputR.setAttribute('readonly', 'true');
inputR.setAttribute('type', 'number');

btnR.addEventListener( 'click', () => {
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    inputR.setAttribute('value',resultado);
});

document.body.append(input1);
document.body.append(input2);
document.body.append(btnR);
document.body.append(inputR);