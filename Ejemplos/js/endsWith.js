const p = "Pablo"
console.log(p.endsWith("o")); // returns true
console.log(p.endsWith("l")); // returns false

console.log(p.endsWith("o", 5)); // returns true;
console.log(p.endsWith("o", 4)); // returns false;

// Verifica si termina con el parametro dado, se puede añadir posición 