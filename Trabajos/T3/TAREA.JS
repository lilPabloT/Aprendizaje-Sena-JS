/* 
Crear el metodo convertirEnCamel, el cual recibe como parametro un String con palabras con guion y devuelva palabras con mayuscula.

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/


function convertirEnCamel( String ){
    let change = String.split(`-`);
    change = change.join('');
    console.log(change)
}
convertirEnCamel("Hola-Mundo");