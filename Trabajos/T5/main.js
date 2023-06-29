let body = document.body;
body.style.width = "100vh";
body.style.height = '100%';
body.style.backgroundColor = 'gray';

let div = document.createElement('div');
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = '#aaa';
document.body.append(div);
div.style.marginLeft = "70%"
div.style.marginTop = '30%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.fontSize = '20px';

let segundos = 0;
let minutos = 0;
let horas = 0;

let time = setInterval(( ) => {
    segundos ++
    if ( segundos == 60 ){
        minutos ++
    }
    if( horas == 60 ){
        horas ++
    }
    if ( segundos == 60 ){
        segundos = 0
    }
    let color1 = Math.round(Math.random()*8 + 1);
    let color2 = Math.round(Math.random()*8 + 1);
    let color3 = Math.round(Math.random()*8 + 1);
    div.style.backgroundColor = `#${color1}${color2}${color3}`;
    div.textContent = `${horas}:${minutos}:${segundos}`;
    
}, 1000);
div.style.border = '3px solid #000';

let btn = document.createElement('button');
document.body.append(btn);
btn.textContent = 'Parar el reloj';
btn.style.width = "100px";
btn.style.height = "20px";

btn.addEventListener( 'click', () => {
    clearInterval(time)
});