let arreglo = new Array();
let arr = [];

let fruits = ["Papaya", "Piña", "Mango", "Fresa", "Mora", "Lulo"];
console.log(fruits[0]);
console.log(fruits[5]);
console.log(fruits[3]);

console.log(fruits);
fruits[0] = "Coco";
console.log(fruits);
console.log(fruits[0])

console.log(fruits.length)

console.log(fruits[fruits.length - 1])
console.log(fruits.at(-1)); // igual que la linea 16

fruits.push("Papa"); // Inserta elemento al final del arreglo
console.log(fruits)
console.log(fruits.pop()); // Gets the first element and remove it
console.log(fruits);


console.log(fruits.shift()); //Extrae el primer elemento de un arreglo
console.log(fruits)

fruits.unshift("Mora", "Fresa"); // Agrega un elemento al comienzo del arreglo
console.log(fruits);

// Crear una funcion que agrege los nombre ingresado por parametro al arreglo names
// Utilizar un promp segun use la funcion para agregar nombres
// Escribir el codigo para insertar la cantidad que indique el usuario 


// Mi manera

// let people = [];
// const num = parseInt(prompt("Numero de personas a agregar"))

// function addPerson( name ){
//     people.push(name);
//     people.forEach( names => {
//         console.log(names);
//     });
// }
// let i = 0;
// while( i < num ){
//     let person = prompt("Nombre de la persona");
//     addPerson(person);
//     i ++;
// }

// Manera del instructor

// let people = [];
// function addName( name ){
//     people.push(name);
// }

// let numNames = parseInt(prompt("¿Cuantos nombres quiere ingresar?"));

// for ( let i = 0 ; i < numNames ; i ++){
//     let nombre = prompt("Ingrese el nombre");
//     addName(nombre);
// }

// for ( let i = 0 ; i < numNames ; i ++ ){
//     console.log(people[i]);
// }

// // For .. of
// for ( let nombre of people ){
//     console.log(nombre);
// }




//Truncando el arreglo
console.log(fruits.length = 3);
console.log(fruits);


delete fruits[1];
console.log(fruits.length);
console.log(fruits);

// Slice
fruits.splice(1, 1); // desde el indice 1, elimine 1 elemento
console.log(fruits.length);
console.log(fruits);


arr = ["Yo", "estudio", "JS", "en", "el", "Sena"]
console.log(arr);
arr.splice(1, 2, "voy", "a", "bailar");
console.log(arr);
let datos = arr.splice(1, 3);
console.log(datos);


arr.splice(1, 0, "estudio", "JavaScript"); // Desde el indice 1, elimina 0 elementos y añado 2 desde la posicion 1;
console.log(arr);



//¿Que hace la función slice?, de un ejemplo con su nombres

let miNombre = ["Pablo", "Emilio", "Coca", "Gonzalez"];

// Cree un arreglo con los apellidos usando slice
// Toma el primer valor de standar, pero el ultimo lo toma restandole 1
console.log(miNombre.slice(2))
console.log(miNombre.slice(-3, -2));


let nombre = ["Juan", "Mateo"];
let apellido = ["Morales", "Quintero"];

let nombreCompleto = nombre.concat(apellido, "No", "existe", "en", "la", "vida", "real")
console.log(nombreCompleto);



//forEach con un array asociativo
let ojo = {
    uno: ["Hola Palo", "Hola Juan", "Hola Tafu"],
    dos: ["Hola pepe"],
    tres: ["Hello"]
}

ojo["uno"].forEach(element => {
    console.log(element)
});

// Ejemplo del instructor

["Mateo", "Marcos", "Lucas", "Jose", "Maria", "Juan", "Magdalena"].forEach((item, index, array) => {
    console.info(`${item} tiene el índice ${index} en ${array}`)
});


// ["Mateo", "Marcos", "Lucas", "Jose", "Maria", "Juan", "Magdalena"].forEach(alert) // Alerta cada elemento