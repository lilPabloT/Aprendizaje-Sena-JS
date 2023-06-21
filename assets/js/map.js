/* El metodo map crea un nuevo arreglo con los resultados de la llamada a una funcion */

let numeros = [ 1, 5, 10, 15 ]
let doubles = numeros.map( function( x ){
    return x * 2;
});

console.log(numeros);
console.log(doubles);

// Cree una funcion que reciba un arreglo y devuelva un arreglo de numeros devulva un arreglo con las raices cuadradas de los numeros dentro del arreglo

let nums = [ 9, 81, 4 ]

let raices = nums.map( function( x ){
    return Math.sqrt( x )
})
console.log( nums );
console.log( raices );


// Forma del instructor

function getRaices ( array ){
    return array.map( function( x ){
        return Math.sqrt( x )
        // return x ** 1/2 forma de sacar la raiz sin usar el metodo Math
    })
}
console.log( getRaices( nums ))




// *************************************
// Asignacion destructurante
// *************************************

let arr = [ 'Juan', 'Alvarado' ];

// let nombre = arr[0];
// let apellido = arr[1];
// console.log(nombre + ' ' + apellido);

let [ nombre, apellido ] = arr;
console.log(nombre);
console.log(apellido);

arr = ['Juan', 'Alvarado', 'Developer', 'Sena'];
let [ name, , cargo, , ] = arr
console.log( cargo );

let [ , , , empresa ] = arr
console.log( empresa);

let user = {};

[user.name, user.lName, user.job, user.company] = arr;
console.log( user )


let [name1, name2, ...rest] = ['Mateo', 'Marcos', 'Lucas', 'Juan'];
console.log(name1);
console.log(name2);
console.log(rest)
console.log(rest.length)