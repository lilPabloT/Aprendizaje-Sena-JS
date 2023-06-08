// Localizar valores de un array

let arreglo = ["p", "a", "b", "l", "o"];

console.log(arreglo.indexOf("p")); // p en posicion 0
console.log(arreglo.indexOf("e")); // e en posicion -1 si no esta


// Ver las veces que aparece un elemento


let yo = [];
let contador = 0;
let array = ['p', 'a', 'b', 'l', 'o', 'p', 'a', 'b', 'l', 'o'];
let buscar = 'a';
let idx = array.indexOf(buscar);

while (idx != -1) {
  yo.push(idx);
  contador ++;
  idx = array.indexOf(buscar, idx + 1);
}
console.log(yo);
console.log("la a aparece: " + contador + " veces")



// Encontrar una persona en el arreglo, si no esta añadirlo

function addPerson( someone, who ){
    if ( someone.indexOf( who ) === -1 ){
        someone.push( who );
        console.log(someone);
    } else{
        console.log("Ya esta en la lista")
    }
}

let people = ["Pablo", "Juan", "Mary", "Pepe", "Joe"];

addPerson(people, "pablo");