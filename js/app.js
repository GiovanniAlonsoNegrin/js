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

// const carrito  = document.getElementById("carrito");
// const template = document.getElementById("template");
// const fragment = document.createDocumentFragment();
// const botones  = document.querySelectorAll(".card .btn");

// const carritoObjeto = {};

// const agregarCarrito = (e) => {
//     console.log(e.target.dataset.fruit);

//     //objeto literal
//     const producto = {
//         titulo: e.target.dataset.fruit,
//         id: e.target.dataset.fruit,
//         cantidad: 1
//     }

//     if (carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
//     }

//     carritoObjeto[producto.titulo] = producto;

//     pintarCarrito();

//     console.log(carritoObjeto);
// }

// const pintarCarrito = () => {
//     carrito.textContent = "";

//     Object.values(carritoObjeto).forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.titulo;
//         clone.querySelector(".badge").textContent = item.cantidad;

//         fragment.appendChild(clone);
//     });
 
//     carrito.appendChild(fragment);

// }

// botones.forEach((btn) => btn.addEventListener("click", agregarCarrito));

//------ Fin Práctica 2 -------//

// let a = 1;
// let b = 2;

// let result = a + b;

// console.log(result);

// Array methods //
// Los objetos arrays y funciones se pasan por referencia

// const frutas = ["🍌", "🍎", "🍓"];

// // const nuevoArray = frutas.map((item) => {
// //    return item; 
// // });
// const nuevoArray = frutas.map((fruta) => fruta); //Es lo mismo que la función de arriba

// const copiaArray = frutas;

// frutas.push("🍐");

// console.log(copiaArray);

// console.log(nuevoArray);

// const users = [
//     {uid: 1, name: "John", age: 34},
//     {uid: 2, name: "Amy", age: 30},
//     {uid: 3, name: "Will", age: 10},
// ];

// const names = users.map((user) => user.name);

// console.log(names);

// const numeros =  [1,2,3,4,5,6,7,8,9,10];

// const numerosPorDos = numeros.map(num => num * 2);
// console.log(numerosPorDos);

// const mayores = users.filter((user) => user.age >= 30);

// console.log(mayores);

// const userFiltrado = users.filter((user) => user.uid !== 3); //Devuelve todos los usuarios que no tengan uid 3
// console.log(userFiltrado);

// const existe = users.some((user) => user.uid === 2);
// console.log(existe);

// if (existe) {
//     const amy = users.find((user) => user.uid === 2);
//     console.log(amy);
    
//     const {age} = users.find((user) => user.uid === 2); //Destructuración de datos, nos devuelve la edad de amy.
//     console.log(age);
// }

// const indice = users.findIndex((user) => user.uid === 2);
// console.log(users[indice]);

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// //             0      1       2        3

// const arrayNuevo = arr.slice(1, 3);
// console.log(arrayNuevo);

// //Unir arrays

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2); //Método concact
// const array4 = [...array1, "-", ...array2]//Operador Spread, traeme los elementos del array1 y traeme los elementos del array2.
// console.log(array3);
// console.log(array4);

//Método reduce

// const numeros = [1,2,3,4,5];

// const sumarTodos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);
// //Al estar iterando sobre el array números el valor actual será los valores que va agarrando del array numeros en cada iteración, en la primera vuelta el acumulador vale 0 y le estaremos sumando 1, en la segunda vuelta el acumulador vale 1 y le estaremos sumando 2.

// console.log(sumarTodos);

// //Aplanar array
// const arrayNumeros = [
//     [0,1],
//     [2,3],
//     [4,5],
// ];

// const soloNumeros = arrayNumeros.reduce((acumulador, numeroActual) => acumulador.concat(numeroActual));
// //En cada iteracción le concatenamos al acumulador el numero actual. Dado que en la primera vuelta no existe el numero acutal, solamente cogera el numero 0 como acumulador, en la segunda vuelta el acumulador sera el 0 y el numero actual sera el 1, contanando este último al 0.
// console.log(soloNumeros);

// const arrayPlano = [].concat(...arrayNumeros); //Operador spread
// console.log(arrayPlano);

// const arrayPlano2 = arrayNumeros.flat(); //Es muy reciente, crea una nueva matriz.
// console.log(arrayPlano2);

// const arrayNumeros2 = [1, 2, [3, 4, [5, 6]]];
// const arrayPlano3 = arrayNumeros2.flat(2); //Especificamos el nivel de profundidad.
// console.log(arrayPlano3);

//Split y Join

// const meses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMeses = meses.split(",");
// console.log(arrayMeses);

// const nuevoTexto = arrayMeses.join("-");
// console.log(nuevoTexto);

// ----- Práctica 2 ---- //
// const carrito  = document.getElementById("carrito");
// const template = document.getElementById("template");
// const fragment = document.createDocumentFragment();
// const botones  = document.querySelectorAll(".card .btn");

// const carritoObjeto = [];

// const agregarCarrito = (e) => {
//     console.log(e.target.dataset.fruit);

//     const producto = {
//         titulo: e.target.dataset.fruit,
//         id: e.target.dataset.fruit,
//         cantidad: 1
//     }

//     const index = carritoObjeto.findIndex((item) => item.id === producto.id); //Devuelve -1 si no está en dentro del array
//     console.log(index);

//     if(index === -1){
//         carritoObjeto.push(producto);
//     } else {
//         carritoObjeto[index].cantidad++;
//     }

//     console.log(carritoObjeto);

//     pintarCarrito(carritoObjeto);

// }

// const pintarCarrito = (array) => {
//     carrito.textContent = "";

//     array.forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.titulo;
//         clone.querySelector(".badge").textContent = item.cantidad;

//         fragment.appendChild(clone);
//     });
 
//     carrito.appendChild(fragment);

// }

// botones.forEach((btn) => btn.addEventListener("click", agregarCarrito));

// ------- Fin práctica 2 ------ //

// Bubbling (Se progaga desde el elemento hijo hasta el padre por defecto)//

// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// padre.addEventListener("click", () => {
//     console.log("Me diste click padre");
// }, true); //Mediante el parametro true invertimos la propagacion del addEventListener

// hijo.addEventListener("click", () => {
//     console.log("Me diste click hijo");
// }, true);

// nieto.addEventListener("click", () => {
//     console.log("Me diste click nieto");
// }, true);

// parte 2
// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach((caja) => {
//     caja.addEventListener("click", (e) => { //Para detener la propagación le pasamos el parametro de evento e
//         e.stopPropagation();
//         console.log("Me diste click");
//     });
// })
// fin parte 2

// parte 4 preventDefault //
// const form = document.querySelector("form");

// form.addEventListener("submit", e => {
//     e.preventDefault(); //Evitamos que se envíe el formulario.
//     console.log("me diste click");
// });

// const enlace = document.querySelector("a");

// enlace.addEventListener("click", e => {
//     e.preventDefault(); //Evitamos que se envíe el formulario.
//     console.log("me diste click enlace");
// });

// fin parte 4 prevent default //

// delegacion de eventos //
// const container = document.querySelector(".container");

// container.addEventListener("click", e => {
// document.addEventListener("click", e => {
//     // console.log(e.target);

//     if(e.target.id === "padre"){
//         console.log("Diste click al padre");
//     }

//     if(e.target.matches(".border-secondary")){
//         console.log("Diste click al hijo");
//     }

//     if (e.target.dataset.div === "divNieto") {
//         console.log("Diste click al nieto");
//     }

// });

// fin delegacion eventos //

// parte 5 //

// const carrito        = document.getElementById("carrito");
// const template       = document.getElementById("template");
// const footer         = document.getElementById("footer");
// const templateFooter = document.getElementById("templateFooter");
// const fragment       = document.createDocumentFragment();
// const botones        = document.querySelectorAll(".card .btn");

// document.addEventListener("click", e => {

//     // console.log(e.target.dataset.fruit);
//     // console.log(e.target.matches(".card .btn-outline-primary"));

//     if(e.target.matches(".card .btn-outline-primary")){
//         // console.log("ejecutar agregar al carro");
//         agregarCarrito(e);
//     }

//     // console.log(e.target.matches(".list-group-item .btn-danger"));

//     if (e.target.matches(".list-group-item .btn-success")) {
//         btnAumentar(e);
//     }

//     if (e.target.matches(".list-group-item .btn-danger")) {
//         btnDisminuir(e);
//     }

// });

// let carritoArray = [];

// const agregarCarrito = (e) => {
//     // console.log(e.target.dataset.fruit);

//     const producto = {
//         titulo: e.target.dataset.fruit,
//         id: e.target.dataset.fruit,
//         cantidad: 1,
//         precio: parseInt(e.target.dataset.price), //Pasamos el parámetro a entero
//     };

//     // console.log(producto);

//     const index = carritoArray.findIndex((item) => item.id === producto.id); //Devuelve -1 si no está en dentro del array
//     // console.log(index);

//     if(index === -1){
//         carritoArray.push(producto);
//     } else {
//         carritoArray[index].cantidad++;
//         // carritoArray[index].precio = carritoArray[index].cantidad * producto.precio;
//     };

//     // console.log(carritoArray);

//     pintarCarrito();

// };

// const pintarCarrito = () => {
//     carrito.textContent = "";

//     carritoArray.forEach(item => {
//         const clone = template.content.cloneNode(true);
//         clone.querySelector(".text-white .lead").textContent = item.titulo;
//         clone.querySelector(".badge").textContent = item.cantidad;
//         clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;
//         clone.querySelector(".btn-danger").dataset.id = item.id; 
//         clone.querySelector(".btn-success").dataset.id = item.id; 

//         fragment.appendChild(clone);
//     });
 
//     carrito.appendChild(fragment);

//     pintarFooter();

// };

// const pintarFooter = () => {
//     // console.log("pintar footer");

//     footer.textContent = "";

//     const total = carritoArray.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad * valorActual.precio, 0);

//     // console.log(total);

//     const clone = templateFooter.content.cloneNode(true);
//     clone.querySelector("span").textContent = total;

//     if(total > 0){
//         footer.appendChild(clone);
//     } else {
//         return
//     }

// };

// const btnAumentar = (e) => {
//     // console.log("Me diste click", e.target.dataset.id);
//     carritoArray = carritoArray.map(item => {
//         if(item.id === e.target.dataset.id){
//             item.cantidad++;
//         }
//         return item;
//     });

//     pintarCarrito();
// };

// const btnDisminuir = (e) => {
//     // console.log("Me diste click", e.target.dataset.id);
//     carritoArray = carritoArray.filter(item => {
//         if(item.id === e.target.dataset.id){
//             if(item.cantidad > 0){
//                 item.cantidad--;
//                 // if(item.cantidad === 0){
//                 //     return
//                 // }
//                 if(item.cantidad === 0) return;
//                 return item;
//             } 
//         } else {
//             return item;
//         }
//     });

//     pintarCarrito();
// };

// ------- Fin parte 5 ------ //

// ------- Formularios 1 ------ //
// ------- Expresiones regualres ------ //

// const regEx = /bluuweb/i; //Anotación literal
// const regEx = /[ue]/i; //Anotación literal
// const regEx = /bluuweb|blueweb/i; //Anotación literal bluuweb o bluweb
// const regEx = /[A-Za-z0-9]/i; //Anotación literal letras y números
// const regEx = /^\d+$/gi; //Anotación literal solo números
// const regEx = /^[a-zA-Z]*$/; //Anotación literal solo letras
// const regEx = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //Anotación literal validar email
 
// // const regExObj = new RegExp("bluuweb|bluweb", "i"); //Anotación de objeto

// console.log(regEx.test("hola@e.es"));

// ------- Fin Expresiones regualres ------ //

// ------- Formularios validación --------//
// const formulario = document.getElementById("userForm");
// const userName   = document.getElementById("userName");
// const userEmail  = document.getElementById("userEmail");
// // const formulatio = document.querySelector("#userForm");
// // const userName   = document.querySelector("input[name='userName']");
// // const userEmail  = document.querySelector("input[name='userEmail']");

// const regExUserName  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Solo letras
// const regExUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// formulario.addEventListener("submit", e => {
//     e.preventDefault(); //Evitamos que se envie el formulario
//     // console.log(userName.value);
//     // console.log(userEmail.value);

//     if(!regExUserName.test(userName.value)) {
//         console.log("Formato de usuario no válido");
//         return; //Se escapa y no continúa
//     }

//     if (!regExUserEmail.test(userEmail)) {
//         console.log("Formato de email no válido");
//         return;
//     };

//     console.log("Formulario enviado");

// });

// ------- Fin Formularios validación --------//

// ------- Práctica Formularios validación --------//

// const formulario = document.getElementById("userForm");
// const userName   = document.getElementById("userName");
// const userEmail  = document.getElementById("userEmail");

// const alertSuccess = document.getElementById("alertSuccess");
// const alertName    = document.getElementById("alertName");
// const alertEmail   = document.getElementById("alertEmail");

// const regExUserName  = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Solo letras
// const regExUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// const monstrarMensajeExito = () => {
//     alertSuccess.classList.remove("d-none");
//     alertSuccess.textContent = "Mensaje enviado con éxito";
// };

// const mostrarMensajeError = (errores) => {
//     errores.forEach(item => {
//         item.tipo.classList.remove("d-none");
//         item.tipo.textContent = item.msg;
//     });
// };

// formulario.addEventListener("submit", e => {
//     e.preventDefault(); //Evitamos que se envie el formulario

//     alertSuccess.classList.add("d-none");

//     const errores = [];

//     if(!regExUserName.test(userName.value) || !userName.value.trim()) {
//         userName.classList.add("is-invalid");
//         errores.push({
//             tipo: alertName,
//             msg: "Formato no válido en el campo nombre, solo letras."
//         })
//         // console.log("Formato de usuario no válido");
//         // return; //Se escapa y no continúa
//     } else {
//         alertName.classList.add("d-none");
//         userName.classList.remove("is-invalid");
//         userName.classList.add("is-valid");
//     };

//     if (!regExUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
//         userEmail.classList.add("is-invalid");
//         errores.push({
//             tipo: alertEmail,
//             msg: "Formato no válido en el campo email, introduzca un email válido."
//         }) 
//         // console.log("Formato de email no válido");
//         // return;
//     }else{
//         alertEmail.classList.add("d-none");
//         userEmail.classList.remove("is-invalid");
//         userEmail.classList.add("is-valid");
//     };

//     if(errores.length !== 0){
//         mostrarMensajeError(errores);
//         return
//     }

//     monstrarMensajeExito();

// });

// ------- Fin práctica Formularios validación --------//

// ------- FormData ------- //

// const formulario = document.getElementById("userForm");

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const inputs = new FormData(formulario);

//     // for (let item of inputs) {
//     //     console.log(item);
//     // }

//     console.log(inputs.get("userName"));
//     console.log(inputs.get("userEmail"));

//     console.log("procesando formulario");
// });

// ------- End form data -------- //

// callback

// const posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ];

// const findPostById = (id, callback) => {
//     const post = posts.find(item => item.id === id);

//     if (post) {
//         callback(null, post);
//     } else {
//         callback("No se encontró el post con el id " + id);
//     }
    
// }

// findPostById(1, (err, post) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log(post);
// });

// end callback 

// promesas

// const findPostById = (id) => {

//     const post = posts.find(item => item.id === id);

//     return new Promise((resolve, reject) => {
        
//         if(post){
//             resolve(post);
//         } else {
//             reject("No se encontró el id " + id);
//         };

//     });

// }

// const findPostById = id => new Promise((resolve, reject) => {
//     const post = posts.find(item => item.id === id);
//     if(post){
//         resolve(post);
//     } else {
//         reject("No se encontró el id " + id);
//     };
// });

// findPostById(4)
//     .then(post => console.log(post))
//     .catch(e => console.log(e));
// findPostById(1)
//     .then((post) => {
//         console.log(post);
//         return findPostById(2);
//     })
//     .then(post => {
//         console.log(post);
//         return findPostById(3);
//     })
//     .then(post => {
//         console.log(post);
//         return findPostById(4);
//     })
//     .catch((e) => console.log(e));

// const buscar = async(id) => {
//     let loading = true;
//     try {
//         const resPosts = await Promise.all([
//             findPostById(1),
//             findPostById(2)
//         ]);
//         // const post = await findPostById(id);
//         // console.log(post.title);
//         console.log(resPosts);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Se ejecuta si o si");
//         loading = false;
//     };
// };

// buscar(1);

// ----- Fetch ------ //

// const url = "https://jsonplaceholder.typicode.com/posts/";

// // fetch(url)
// //     .then((respuesta) => respuesta.json())
// //     .then(data => console.log(data))
// //     .catch((e) => console.log(e))
// //     .finally(() => console.log("Finalizó"));

// const findPostById = async(id) => {

//     try {
        
//         const respuesta = await fetch(url + id);
//         const post = await respuesta.json();

//         console.log(post);

//     } catch (error) {
//         console.log(error);
//     }

// };

// findPostById(50)

// ------ fetch v2 ------ //

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => res.json())
//     .then((data) => console.log(data.forms[0].name));

// ------ fetch v3 ------ //
// document.addEventListener("DOMContentLoaded", () => { //que carge el dom.
//     fetchData();
// });

// const fetchData = async() => {
//     console.log("Obteniendo datos");

//     try {
//         loadingData(true);

//         const res  = await fetch("https://rickandmortyapi.com/api/character");
//         const data = await res.json();

//         // console.log(data);
//         mostrarCards(data);

//     } catch (error) {
//         console.log(error);
//     } finally {
//         loadingData(false);
//     }
// };

// const loadingData = estado => {
//     const loading = document.querySelector("#loading");
//     if(estado){
//         loading.classList.remove("d-none");
//     } else {
//         loading.classList.add("d-none");
//     }
    
// };

// const mostrarCards = data => {
//     // console.log(data);
//     const cards    = document.getElementById("cardDinamica");
//     const template = document.getElementById("templateCard").content;
//     const fragment = document.createDocumentFragment();

//     data.results.forEach(item => {
//         // console.log(item);
//         const clone = template.cloneNode(true);
//         clone.querySelector("h5").textContent = item.name;
//         clone.querySelector("p").textContent  = item.species;
//         clone.querySelector("img").setAttribute("src", item.image);

//         //Guardamos en el fragment para evitar el reflow
//         fragment.appendChild(clone);
//     });

//     cards.appendChild(fragment);

// };

// ---- POO ---- //


// --- functión constructora = Plantilla = Class --- //

//Forma antigua//
// function Persona(nombre){
//     this.nombre = nombre;
//     this.saludar = function (){
//         return `${this.nombre} dice hola`; //Interpolación
//     }
//     // this.greeting = function (){
//     //     return `${this.nombre} says hi!`;
//     // }
// }

// Persona.prototype.greeting = function (){
//     return `${this.nombre} says hi!`;
// }

// const juanito = new Persona("juanito");
// const pedrito = new Persona("pedrito");
// console.log(juanito.saludar());
// console.log(pedrito.saludar());

// ---- Forma nueva ---- //
// ---- Class --- //

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad   = edad;
//     };

//     get getNombre(){
//         return this.nombre;
//     }

//     set setNombre(nombre){
//         this.nombre = nombre;
//     }

//     saludar(){
//         return `${this.nombre} dice hola`;
//     }; 

//     static probarSaludo(nombre){
//         return `${nombre} probando saludo`;
//     }
// };

// class Estudiante extends Persona{
//     #notas = []; //Propiedad privada

//     constructor(nombre, edad, estudios, aula, notas = []){
//         super(nombre, edad);
//         this.estudios = estudios;
//         this.aula = aula;
//         // this.notas = notas || [];
//         this.#notas = notas;
//     }

//     set setNotas(nota){
//         this.#notas.push(nota);
//     }

//     get getNotas(){
//         return this.#notas;
//     }

//     saludar(){
//         return `${this.nombre} dice hola desde estudiante`;
//     }
// }

// console.log(Persona.probarSaludo("Giovanni"));

// const juanito = new Persona("Juanito");
// const pedrito = new Estudiante("Pedrito", 30, "Informática", 5);
// // juanito.nombre = "pedrito"; no hacer así
// juanito.setNombre = "pedrito";
// console.log(juanito.getNombre);
// console.log(pedrito.saludar());

// pedrito.setNotas = 7;
// pedrito.setNotas = 5;
// pedrito.setNotas = 1;
// pedrito.setNotas = 6;

// console.log(pedrito.getNotas);
// // console.log(pedrito.#otas);

// mega práctica

// const formulario         = document.querySelector("#form");
// const cardsEstudiantes   = document.querySelector("#cardsEstudiantes");
// const cardsProfesores    = document.querySelector("#cardsProfesores");
// const templateEstudiante = document.querySelector("#templateEstudiante").content;
// const templateProfesor   = document.querySelector("#templateProfesor").content;
// const alert              = document.querySelector(".alert");

// const students = [];
// const teachers = [];

// class Person {

//     static _ID = 0; //propiedad protegida estática

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.id = ++this.constructor._ID; //Id autoincremental
//     };

//     static showInfoUI(person, type){ //va a recibir la instancia de la persona y el tipo para saber si es estudiante o profesor
//         if (type === "Estudiante") {
//         // if (person instanceof Student){
//             cardsEstudiantes.textContent = "";
//             const fragment = document.createDocumentFragment();

//             person.forEach((item) => {
//                 fragment.appendChild(item.addNewStudent());
//             });

//             cardsEstudiantes.appendChild(fragment);
//         };
        
//         if (type === "Profesor") {
//             cardsProfesores.textContent = "";
//             const fragment = document.createDocumentFragment();

//             person.forEach((item) => {
//                 fragment.appendChild(item.addNewTeacher());
//             });

//             cardsProfesores.appendChild(fragment);
//         };
//     };

// };

// class Student extends Person{

//     #status = false;
//     #student = "Estudiante";

//     // constructor(name, age, status){
//     //     super(name, age);
//     //     this.#status = status;
//     // };

//     set setStatus(status){
//         this.#status = status;
//     };

//     get getStatus(){
//         return this.#status;
//     };

//     get getStudent(){
//         return this.#student;
//     };

//     addNewStudent(){
//         const clone = templateEstudiante.cloneNode(true);
//         clone.querySelector("h5 .text-primary").textContent = this.name;
//         clone.querySelector("h6").textContent = this.getStudent;
//         clone.querySelector("p").textContent = this.age;

//         if (this.#status) {
//             clone.querySelector(".badge").className = "badge bg-success"; //className reemplaza todas las clases del elemento seleccionado
//             clone.querySelector(".btn-success").disabled = true;
//             clone.querySelector(".btn-danger").disabled = false;
//         } else {
//             clone.querySelector(".badge").className = "badge bg-danger";
//             clone.querySelector(".btn-success").disabled = false;
//             clone.querySelector(".btn-danger").disabled = true;
//         };

//         clone.querySelector(".badge").textContent = this.#status ? "Aprobado" : "Suspendido";

//         clone.querySelector(".btn-success").dataset.id = this.id;
//         clone.querySelector(".btn-danger").dataset.id  = this.id;
 
//         return clone;
//     };

// };

// class Teacher extends Person{

//     #teacher = "Profesor";

//     // constructor(){

//     // };

//     addNewTeacher(){
//         const clone = templateProfesor.cloneNode(true);

//         clone.querySelector("h5").textContent = this.name;
//         clone.querySelector("h6").textContent = this.#teacher;
//         clone.querySelector("p").textContent  = this.age;

//         return clone;
//     };

// }

// formulario.addEventListener("submit", e => {
//     e.preventDefault();

//     alert.classList.add("d-none"); //Reiniciamos el alert

//     const datos = new FormData(form); /*Recibe como parametro el id del formulario*/
//     datos.forEach((item) => console.log(item)); /* Lee los names de cada input e iteramos sobre ellos */

//     // console.log([...datos.values()]); //Devuelve un array con cada value de cada input
//     const [name, age, option] = [...datos.values()]; //Usamos destructuración de datos para asignarle una variable a cada value.
//     // console.log(name, age, option); //Obtenemos los valores de los inputs

//     //Validación de datos
//     if (!name.trim() || !age.trim() || !option.trim()) { //Si alguno de los datos está en blanco.
//         // console.log("Algún dato en blanco");
//         alert.classList.remove("d-none");
//         return
//     }
//     //Fin validación

//     if (option === "Estudiante") {
//         const student = new Student(name, age);
//         // console.log(student);
//         students.push(student); //Añadimos las intancias de cada estudiante
//         // console.log(students);
//         Person.showInfoUI(students, option);
//     }


//     if (option === "Profesor") {
//         const teacher = new Teacher(name , age);

//         teachers.push(teacher);

//         Person.showInfoUI(teachers, option);
//     }

// });

// document.addEventListener('click', (e) => {
//     // console.log(e.target.dataset.id);
//     if (e.target.dataset.id) {
//         // console.log(e.target.matches(".btn-success"));
//         if (e.target.matches(".btn-success")) {
//             students.map((item) => {
//                 if (item.id === Number(e.target.dataset.id)) { //Pasámos a int e.target.dataset.id ya que no devuelve un string
//                     console.log("DENTROO");
//                     item.setStatus = true;
//                 };
//                 // console.log(item);
//                 return item;
//             });
//         };
//         if (e.target.matches(".btn-danger")) {
//             students.map((item) => {
//                 if (item.id === Number(e.target.dataset.id)) { //Pasámos a int e.target.dataset.id ya que no devuelve un string
//                     item.setStatus = false;
//                 };
//                 // console.log(item);
//                 return item;
//             });
//         };
//         Person.showInfoUI(students, "Estudiante");
//     } else {
        
//     };
// });
// fin mega práctica

//Módulos ES NECESARIO HACERLO DESDE UN SERVIDOR.

//Función auto ejecutable IIFE

// (function(){
//     const fruit = "🍌";
//     console.log(fruit);
// })()

// const name = "giovanni";

// // import {sandia} from "./fruits.js";
// // import {pintarPlatano} from "./fruits.js";
// // import {frutilla} from "./fruits.js";
// // import {Fruit} from "./fruits.js";
// import melon, {pintarPlatano, frutilla as fresa, Fruit} from "./fruits.js";
// // import melon from "./fruits.js";

// const guinda = new Fruit("🍒");

// console.log(melon);
// pintarPlatano();
// fresa();
// console.log(guinda.name);
//Fin módulos

//Local Storage

// localStorage.setItem("sandia", "🍉")
// localStorage.setItem("banana", "🍌");

// if (localStorage.getItem("banana")) {
//     const myBanana = localStorage.getItem("banana");
//     console.log(myBanana);
// };

// // localStorage.removeItem("banana");

// localStorage.clear(); //Elimina todos los elementos guardados

const frutas = [
    {
        name: "🍌",
        color: "yellow",
    },
    {
        name: "🍒",
        color: "red",
    },
    {
        name: "🍐",
        color: "green",
    },
];

localStorage.setItem("frutas", JSON.stringify(frutas)); //Convertimos a un string al array de objetos.

if (localStorage.getItem("frutas")) {
    const fruits = JSON.parse(localStorage.getItem("frutas"));
    console.log(fruits);
};
