let body = document.body;
body.style.height = "100%";
body.style.width = "100vh"


//Header
let encabezado = document.createElement('header');
encabezado.innerHTML = 'Soy un encabezado';
encabezado.className = 'header';
document.body.append(encabezado);

encabezado.style.width = "1800px";
encabezado.style.height = "165px"
encabezado.style.border = "5px solid #000";
encabezado.style.borderRadius = ".8rem";
encabezado.style.backgroundColor = "#00cdff"


// Contenedor
let contenedor = document.createElement('div');
contenedor.className = 'container';
contenedor.style.display = "flex";
contenedor.style.width = "1800px";
contenedor.style.height = "570px";
contenedor.style.margin = "10px"
document.body.append(contenedor);


// Aside de la izquierda
let asideLeft = document.createElement('aside');
asideLeft.innerHTML = 'Soy el aside de la iquierda';
asideLeft.className = 'asideLeft';
asideLeft.style.width = "25%";
asideLeft.style.height = "550px";
asideLeft.style.border = "5px solid #000";
asideLeft.style.borderRadius = '.8rem';
asideLeft.style.background = '#0065ff'
contenedor.append(asideLeft);



// Cuerpo del medio
let cuerpo = document.createElement('div');
cuerpo.innerHTML = 'Soy el cuerpo del documento';
cuerpo.className = 'cuerpo';
cuerpo.style.width = "50%";
cuerpo.style.height = "550px";
cuerpo.style.border = "5px solid #000";
cuerpo.style.borderRadius = '.8rem';
cuerpo.style.marginLeft = '10px';
cuerpo.style.marginRight = '10px';
cuerpo.style.background = '#ff5200';
contenedor.append(cuerpo);


// Aside de la derecha
let asideRight = document.createElement('aside');
asideRight.innerHTML = 'Soy el aside de a derecha';
asideRight.className = 'asideLeft';
asideRight.style.width = "25%";
asideRight.style.height = "550px";
asideRight.style.border = "5px solid #000";
asideRight.style.borderRadius = '.8rem';
asideRight.style.background ='#f69'
contenedor.append(asideRight);

let piePagina = document.createElement('footer');
piePagina.innerHTML = 'Soy el pie de pagina';
piePagina.className = 'piePagina';
piePagina.style.width = '1800px';
piePagina.style.height = '18vh';
piePagina.style.border = "5px solid #000";
piePagina.style.borderRadius = '.8rem'
piePagina.style.background = "green";
document.body.append(piePagina);