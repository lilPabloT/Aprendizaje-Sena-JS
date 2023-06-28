// Crear un elemento
//let divAlert = document.createElement('div');
//divAlert.innerHTML = `<strong class='fs-1'>¡Atención!</strong> Este es un mensaje importante`;
//divAlert.className = 'alert';
//document.body.append(divAlert);

//let Name = prompt("What's your name")
//let bien = document.createElement('div');
//bien.innerHTML = `Bienvenido <i>${Name}</i>`;
//bien.className = 'alert';
//document.body.append(bien)
let ol = document.getElementById('ol');

let antes = document.createElement('li');
antes.innerHTML = 'Prepend';
ol.prepend(antes);

let despues = document.createElement('li');
despues.innerHTML = 'Despues';
ol.append(despues);

let izquierda = document.createElement('div');
izquierda.innerHTML = 'Izquierda (Before)';
ol.before(izquierda);

let derecha = document.createElement('div');
derecha.innerHTML = 'Derecha (After)';
ol.after(derecha);


//Crear un elemento dentro de 'li' utilizando 'prepend'. ¿Donde se ubica?
let otrico = document.createElement('li');
otrico.innerHTML = "Holaaa";
ol.prepend(otrico);

// elem.insertAdjacentHTML(where, html)
/*
* where:
* beforebegin - Inserta indemdiatamente antes del elem
* afterbegin - Inserta al principio del elem
* beforeend - Inserta al final del elem
* afterend - Inserta inmediatamnte dsespues del elem
*/

let div = document.querySelector('#id');
div.insertAdjacentHTML('beforebegin', '<p>BeforeBegin</p>');
div.insertAdjacentHTML('afterend', '<p>AfterEnd</p>');

div.insertAdjacentHTML('beforeend', '<p>BeforeEnd</p>');
div.insertAdjacentHTML('afterbegin', '<p>AfterBegin</p>');

/*
* Eliminar un elemento
* node.remove()
*/
div.remove()

// TODO: Eliminar cada uno de los elemntos de la lista cada segundo.
// for ( let i = 0 ; i > ol.children.length ; i ++ ){
//     let li = ol.children[i];
//     setInterval( () => {
//         li.remove()
//     }, 2000)
// }

let indice = ol.children.length - 1;

let time = setInterval( () => {
    ol.children[indice].remove()
    indice--
}, 1000);

setTimeout(() => {
    clearInterval(time);
}, 6500);