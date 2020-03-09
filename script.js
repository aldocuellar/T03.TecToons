//Se definen constantes
const titulo=document.querySelector('#titulo');
const year=document.querySelector('#year');
const genero=document.querySelector('#genero');
const autores=document.querySelector('#autores');
const descripcion=document.querySelector('#descripcion');
const agregar= document.querySelector('#btn-agregar');
const lista=document.querySelector("#lista");

//Método para agregar las caricaturas
agregar.addEventListener('click', () =>{
    const tituloIng = titulo.value;
    const yearIng = year.value;
    const generoIng = genero.value;
    const autoresIng = autores.value;
    const descripcionIng = descripcion.value;
    
//Revisa el texto ingresado en los campos
    if(tituloIng.trim().length <= 0 || 
    yearIng <= 0 ||
    yearIng.trim().length <= 0 || 
    generoIng.trim().length <= 0 ||
    autoresIng.trim().length <= 0 ||
    descripcionIng.trim().length <= 0
    ) {
        return;
    }

//Crea nuevo objeto en la lista
    const nuevo= document.createElement('ion-item');
    nuevo.textContent=
    tituloIng+"\r\n"+
    yearIng+"\r\n"+
    generoIng+"\r\n"+
    autoresIng+"\r\n"+
    descripcionIng;
    lista.appendChild(nuevo);
});