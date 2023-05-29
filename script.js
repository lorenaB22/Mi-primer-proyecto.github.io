let menu = document.querySelector(".menuHamburguesa");// selecciono la seccion menuHamburguesa
menu.addEventListener("click",transformar);// aca le digo que escuche el elemento menu y si se hace click ejecute la funcion

const listaMenu= document.querySelector(".ul")
const span1 = document.querySelector(".hamburguesa1");
const span2 = document.querySelector(".hamburguesa2");
const span3 = document.querySelector(".hamburguesa3");

function transformar(){ // funcion que se ejecuta si se hace click en el menu
     console.log("me hicieron click");
     span1.classList.toggle("activar1");//el metodo toggle le pone la clase activar1 si no la tiene y se la saca si la tiene
     span2.classList.toggle("activar2");
     span3.classList.toggle("activar3");
     listaMenu.classList.toggle("mostrar");
}