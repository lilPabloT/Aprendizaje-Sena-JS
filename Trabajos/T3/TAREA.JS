/* 
Crear el metodo convertirEnCamel, el cual recibe como parametro un String con palabras con guion y devuelva palabras con mayuscula.

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/

function convertirEnCamel( String ){
    let change = String.split('-');
    console.log( change )
    for ( let i in change ) {
        if ( change[ i ] != change[ 0 ] ){
            change[ i ] = change[ i ].charAt( 0 ).toUpperCase( ) + change[ i ].slice( 1 );
        }
    }
    change = change.join('');  
    return change.charAt( 0 ).toLowerCase() + change.slice( 1 );
}

console.log( convertirEnCamel("una-cadena-corta"))



/*
Escribir la funcion filtrarRango( arreglo, a, b ) que obtenga un array, busque los elementos con un valor mayor o igual a 'a' y menor o igual a 'b' y devuelva un arreglo con los resultados

* let arr = [5, 3, 8, 1]
* let filtrado = filtrarRango( arr, 1, 4 )
*console.log(  filtrado ); // 3, 1
*console.log( arr ); // 5, 3, 8, 1
*/


let arr = [5, 3, 8, 1];

let filtrado = function filtrarRango( arr, a, b ){
    let res = [];
    for ( const iterator of arr ) {
        if( arr[ iterator ] >= a && arr[ iterator ] <= b){
            res.push(arr[ iterator ]);
        }
    }
    return res;
}

console.log( arr );
console.log(filtrado( arr, 1, 4).reverse( ));