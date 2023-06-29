// Input de la estatura
let inputEstatura = document.createElement('input');
inputEstatura.style.marginRight = '10px';
inputEstatura.setAttribute('placeholder', 'Coloca tu estatura');

// Input del peso
let inputPeso = document.createElement('input');
inputPeso.setAttribute('placeholder', 'Coloca tu peso');

// Boton para ver seultados
let btn = document.createElement('button');
btn.innerHTML = 'resultado';

// Input para ver el valor numerico del IMC
let inputResultado = document.createElement('input');
inputResultado.setAttribute('readonly', 'true');
inputResultado.setAttribute('placeholder', 'Valor numerico del IMC');
inputResultado.style.marginLeft = '20px';

// Parrafo de informacio del peso
let p = document.createElement('p');
p.innerHTML = 'Aqui veras como esta tu peso';

// Evento para captar valores y procesar el resutado
btn.addEventListener( 'click', () => {
    let resultado = Number(inputPeso.value) / Number(inputEstatura.value)**2
    resultado = Math.round(resultado);
    if( resultado == 0 || resultado < 0){
        inputResultado.value = 'Ingrese datos coherentes'
    } else{
        inputResultado.value = `Tu IMC es: ${resultado}`
    }

    if ( resultado < 18.5 ){
        p.innerHTML = 'Tienes insuficiencia ponderal';
    } else if( resultado > 18.4 && resultado < 24.9){
        p.innerHTML = 'Intervalo normal';
    } else if( resultado > 24.9 && resultado < 29.9 ){
        p.innerHTML = 'Sobrepeso';
    } else if ( resultado > 29.9 && resultado < 34.9){
        p.innerHTML = 'Obesidad moderada';
    } else if( resultado > 34.9 && resultado < 39.9){
        p.innerHTML = 'Obesidad severa';
    } else{
        p.innerHTML = 'Obesidad muy severa';
    }
})

// Añadimos los objetos
document.body.append(inputEstatura);
document.body.append(inputPeso);
document.body.append(btn)
document.body.append(inputResultado);
document.body.append(p);