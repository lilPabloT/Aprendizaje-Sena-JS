/**
 * Estilos y clases
 */

// Agregar y eliminar clases de un elemento HTML

console.log(document.body.className);
// console.log(document.body.className = 'bg-orange txt-white');
// console.log(document.body.className);
console.log(document.body.classList);

document.body.classList.add('txt-white');
document.body.classList.remove('bg-gray');
document.body.classList.toggle('txt-black');

console.log(document.body.classList);
document.body.classList.toggle('txt-black');

setInterval(( ) => {
    document.body.classList.toggle('txt-black')
}, 500);