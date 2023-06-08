/* 
Crear el metodo convertirEnCamel, el cual recibe como parametro un String con palabras con guion y devuelva palabras con mayuscula.

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/


function convertirEnCamel( String ){
    let change = String.split(`-`);
    for ( let i = 0; i< change.length ; i++){
        if ( i != 0){
            change[i] = change[i].charAt(0).toUpperCase() + change[i].slice(1)
        }
    }
    change = change.join('');
    return change;
}
console.log( convertirEnCamel("ya-termine-el-ejercicio"));