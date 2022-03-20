// console.log("Dentro de javascript");

// console.log(document.getElementById("title"));//Nos selecciona un elemento cuya id es title.
// console.log(document.querySelector("#title"));//Nos selecciona un elemento cuya id es title.
// console.log(document.querySelectorAll(".container .text-danger")); //Nos selecciona todos los elementos dentro con la clase text-danger que estén dentro de un un elemento con la clase container.

// console.log(h1.className); //Muestra las clases css que tiene ese h1. className es una propiedad, no es un método por eso no lleva parentesis.
// console.log(h1.id); //Muestra el id del elemento.
// console.log(h1.style); //Nos muestra todos los estilos que podemos colocarle a este h1
// console.log(h1.tagName); //Nos muestra el nombre del tag.
// console.log(h1.textContent); //Nos muestra el contenido de la etiqueta

// const h1 = document.getElementById("title");
// // h1.textContent = "nuevo texto desde js";
// // h1.style.backgroundColor = "red";
// // h1.style.color = "white";

// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//     console.log("Me diste click");

//     if(h1.textContent === "Texto desde js1"){
//         h1.textContent = "Texto desde js2";
//     } else {
//         h1.textContent = "Texto desde js1";
//     }
    
// });

//---PRÁCTICA V1---//

// const inputColor = document.getElementById("inputColor");
// const p          = document.querySelector(".lead");
// const card       = document.querySelector(".card");
// const button     = document.getElementById("seeColor");

// button.addEventListener("click", () => {
//     let color = inputColor.value;
//     p.textContent = color;
//     card.style.backgroundColor = color;
//     navigator.clipboard
//         .writeText(color)
//         .then(() => console.log("texto copiado"))
//         .catch((e) => console.log(e));
// });

//---******---//


// const lista = document.getElementById("list");
// const arrayPaises = ["España", "Alemania", "Inglaterra"];

// No es del todo correcto hacerlo con appendChild
// arrayPaises.forEach(pais => {
//     const li = document.createElement("li");
//     li.textContent = pais;
//     lista.appendChild(li);
// });

// Forma más correcta que la anterior pero NO es optimo, OJO PRODUCE REFLOW
// arrayPaises.forEach(pais => {
//     lista.innerHTML += `<li>${pais}</li>`;
// });

// Forma correcta Fragment(Es un espacio de memoria donde podemos añadir estructuras del dom pero sin pertener al DOM, y cuando se crear se genera toda la estructura en el DOM)
// const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();
// arrayPaises.forEach(pais => { //Generamos el fragmento
//     const li = document.createElement("li");
//     li.textContent = pais;
//     fragment.appendChild(li);
// });

// lista.appendChild(fragment); //pasamos el fragmento al DOM la lista ordenada

// arrayPaises.forEach(pais => { //Generamos el fragmento
//     const li = document.createElement("li");
//     li.textContent = pais;

//     const nodeReference = fragment.firstChild;

//     fragment.insertBefore(li,nodeReference);
// });

// lista.appendChild(fragment); //pasamos el fragmento al DOM la lista ordenada al revés

// Forma menos correcta evitando el reflow con menos código
// let template = "";

// arrayPaises.forEach(pais => {
//     template += `
//     <li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${pais}</span>
//     </li>
//     `;
// });

// lista.innerHTML = template;

// Forma correcta
// arrayPaises.forEach(pais => { //Generamos el fragmento
//     const li = document.createElement("li");
//     li.className = "list";

//     const b = document.createElement("b");
//     b.textContent = "Pais: ";
 
//     const span = document.createElement("span");
//     span.className = "text-primary";
//     span.textContent = pais + ".";

//     li.appendChild(b);
//     li.appendChild(span);


//     const nodeReference = fragment.firstChild;

//     fragment.appendChild(li);
// });

// lista.appendChild(fragment); //pasamos el fragmento al DOM la lista ordenada al revés


// -------- Parte 2 ------- //

// const lista = document.querySelector("#list");

// const fragment = document.createDocumentFragment();
// const liTemplate = document.getElementById("liTemplate");

// const arrayPaises = ["Perú", "México", "Colombia"];//array



// const clickPaises = (e) => console.log("Me diste click", e.target);//funcion flecha

// arrayPaises.forEach(pais => {
//     const clone = liTemplate.content.firstElementChild.cloneNode(true);//Hacemos el clon(firstElementChild es que funcione al addEventListener)
//     clone.querySelector("span").textContent = pais;

//     clone.addEventListener("click", clickPaises);//Si no colocamos los parentesis en la función clickPaises se ejecuta la función automaticamente a no ser que le pasemos el parametro e a la función detectando el evento.

//     fragment.appendChild(clone);
// });

// lista.appendChild(fragment);

// -------- Practica 2 ------- //

const carrito  = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const botones  = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarCarrito = (e) => {
    console.log(e.target.dataset.fruit);

    const producto = {
        titulo: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        cantidad: 1
    }

    if (carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;

    pintarCarrito();

    console.log(carritoObjeto);
}

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);
    });
 
    carrito.appendChild(fragment);

}

botones.forEach((btn) => btn.addEventListener("click", agregarCarrito));