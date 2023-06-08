let users = [
    {id:1, name: "Mateo"},
    {id:2, name: "Marcos"},
    {id:3, name: "Lucas"},
    {id:4, name: "Juan"},
    {id:5, name: "Mateo"},
    {id:6, name: "María"}
];

let user = users.find( item => item.id == 3);
console.log(user)
console.log(user.name)


// findIndex
console.log(users.findIndex( user => user.name == "María"));

console.log(users.findIndex( user => user.name == "Pedro"));

// findLastIndex
console.log(users.findIndex( user => user.name == "Mateo" && user.id == 5));
console.log(users.findLastIndex(user => user.name == "Mateo"));

// Filter

let someUsers = users.filter( item => item.name == "Mateo");

someUsers.forEach( user => console.log( user.name));

someUsers.forEach(element => {
    console.log( element.name)
});

someUsers = users.filter( item =>item.id < 3);
someUsers.forEach( item => console.log( item.name))


//------------------------
// Transformar un array
//------------------------

// map

let lenghts = users.map( item => item.name.length);
console.log(lenghts);

let numbers = [8, 4, 15, 1, 7, 0, 2];
console.log(numbers);
let doubles = numbers.map( item => item * 2);
console.log(doubles);


// sort
console.log(numbers.sort());
console.log(doubles.sort());

// Ordenar numeros de un arreglo
function compareNumbers(a, b){
    if ( a > b ) return 1;
    if ( a == b ) return 0;
    else return -1;
}
numbers.sort(compareNumbers);
console.log(numbers);


// reverse
console.log(numbers.reverse()); 


// split

let nombres = `Mate
Marcos
Lucas
Juan
`;

let nombresArr = nombres.split(`\n`);
let fin = [];

fin = nombresArr.filter( item => item != "");
console.log(fin)