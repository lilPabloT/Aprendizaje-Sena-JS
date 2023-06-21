/**
 * Fechas párte 2
 */

let today = new Date();
console.log(today);

today.setHours(0, 0, 0);
console.log(today);

let aDay = new Date( 2013, 1, 31);
console.log(aDay)

aDay.setDate(aDay.getDate() + 2 );
console.log(aDay); 

aDay.setSeconds(aDay.getSeconds() + 70 );
console.log(aDay); 

aDay.setDate(1);
console.log(aDay);

aDay.setDate(0);
console.log(aDay);

console.log('***********************************************************************************')

/**
 * To Do
 * Crear una función FLECHA que calcule la cantida de dias que faltan para que se termine el mes dado como parámetro una fecha.
 */

let leftDays = ( date ) => {
    let end = new Date(date);
    end.setMonth(end.getMonth() + 1 );
    end.setDate(0);
    return end.getDate() - date.getDate();
}

console.log( 'Faltan ' + leftDays( new Date(2000, 1, 1)) + ' Días para que se acabe el mes')


// Convertir fechas a números
 // Esto optimiza
let date = Date.now();

for ( let i = 0 ; i < 100_000_000 ; i ++ ){
    let algo = i * i * i
}

let end = Date.now()


console.log( `El tiempo restante es de ${end - date } ms` ) // Milisegundos



/**
 * Crear una funcion FLECHA llamada getDateAgo que reciba una fecha y una cantidad de dias y devuelva el dia del mes que corresponde, contando la cantidad de dias respecto a la fecha pasada
 * 
 * Ejemplo: hoy es 21, si ingresamos la fecha actual junto con 1 el resultado debe ser 20
 */

let getDateAgo = ( date ) => {
    let now = new Date();
    let datee = new Date( date);
    
    return now.getDate() - datee.getDate();
}
console.log( getDateAgo( new Date( 2023, 6, 1 )) );

/**
 * Crear una funcion que calucle la cantidad de segundos que han transcurrido el dia de hoy
 */

console.log(new Date());

let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let todo = hour * 3600000 +  min * 60000 + sec * 1000;

console.log( 'Han pasado', todo , 'ms');


/**
 * Crear una funcion quye calcule la cantidad de segundos que flatan para mañana
 */

let msDia = 86400000
let fin = msDia - todo
console.log('Quedan', fin, 'para que termine el dia')