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

// ¿Y el resto?
console.log(rest);
console.log(rest.length);

let [ name3 = 'Guest', lastName = 'Anonymus' ] = ['Maria']; // Por si llegan datos incompletos
console.log( name3 );
console.log( lastName );



// Desestructuración de objetos

let options = {
    title: 'Menu',
    width: 300,
    height: 500
};


// Reasignacion de nombres solo de las variables no modifica el objeto options
let { height: h, title, width: w } = options;
console.log( title );
console.log( w );
console.log( h );


let option = {
    title: 'Menu',
};

let { height = 100, title: t, width = 200 } = option;
console.log( t );
console.log( width );
console.log( height );


let { title: T2 } = options;
console.log( T2 );



let { title: t2, ...rest2 } = options;
console.log( rest2.width ) // Accedemos al valor


/**
 * To Do
 * Cree un objeto llamado user con las propiedades name, years, y van a obtener los valores en variables separadas inclyendo la varibale isAdmin, que si no lo encuntra en el objeto el valor por defeto es False
 */

let users = {
    nameU: 'Pablo',
    years: 3
}
let { nameU, years, isAdmin = false} = users;
console.log(users)