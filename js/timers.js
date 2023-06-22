/**
 * Planificación de ejecución de instrucciones
 */

// setTimeOut

/**
 * setTimeOut(func|codigo, [delay], [arg1], ...)
 */

let saludar = (name) => {
    alert('Hola ' + name)    
};

// setTimeout(() => {
//     alert("Hola mundo")
// }, 1000)

// setTimeout(() => {
//     alert("Hola mundo")
// }, 3000)

// setTimeout(() => {
//     alert("Hola mundo")
// }, 5000)

// let id = setTimeout( saludar, 3000, 'Pablo');
// console.log( id );


// // Cancelar la ejecución de un temporizador clearTimeOut
// clearTimeout( id );
// console.log( id );


/**
 * Ejecutar codigo periódicamente setInterval
 */

// let intervalId = setInterval( () => {
//     alert('Tock tack')
// }, 2000);

// setTimeout( () => {
//     clearInterval( intervalId );
//     alert("Cancelado")
// }, 5000)


/**
 * TODO: Crear una función que cada segundo por 10 segundos, muestre en consola un numero aleatorio entre 1 y 100
 */


// function randomNums () {
//     let times = setInterval(() => {
//         let random = Math.floor(Math.random() * 99 + 1);
//         console.log(random);
//     }, 1000);

//     setTimeout( () => {
//         clearInterval( times );
//     }, 10100);
// }
// randomNums();

/**
 * Recibir del usuario un tiempo en minutos y realizar una cuneta regresiva en consola ( en segundos).
 * Al terminar el temporizador, mostrar una alerta indicando que se agoto el tiempo
 */

let minutes = parseInt(prompt('Ingrese el timepo en minutos:'));
let seconds = minutes * 60;
let timer = setInterval( () => {
    console.log(--seconds)
}, 1000);

setTimeout( () => {
    clearInterval(timer)
    alert('¡Se agoto el timepo!')
}, minutes * 60000 + 100);