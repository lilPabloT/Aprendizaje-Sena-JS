/**
 * Fechas párte 2
 */

let today = new Date();
console.log(1, today);

today.setHours(0, 0, 0);
console.log(2, today);

let aDay = new Date( 2013, 1, 31);
console.log(3, aDay)

aDay.setDate(aDay.getDate() + 2 );
console.log(4, aDay); 

aDay.setSeconds(aDay.getSeconds() + 70 );
console.log(5, aDay); 

aDay.setDate(1);
console.log(6, aDay);

aDay.setDate(0);
console.log(7, aDay);

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

const getGateAgo2 = ( date, dias ) => {
    let now = new Date( date );
    return now.getDate() - dias;
}
console.log( getGateAgo2( new Date( 2023, 6, 22), 1))

/**
 * Crear una funcion que calcule la cantidad de segundos que han transcurrido el dia de hoy
 */

function secondsToday(){
    let time = new Date();
    return time.getHours() * 3600 +  time.getMinutes() * 60 + time.getSeconds();
}
console.log( 'Han pasado', secondsToday() , 's');

/**
 * Crear una funcion que calcule la cantidad de segundos que faltan para mañana
 */

function secondsLeft(){
    return 86400 - secondsToday()
}
console.log('Quedan', secondsLeft(), 'para que termine el dia')