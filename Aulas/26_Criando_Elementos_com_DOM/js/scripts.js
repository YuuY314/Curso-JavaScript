//inserir num body
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do segundo paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);

//inserir num container
var container = document.getElementById("container");

var el = document.createElement("span");

el.appendChild(document.createTextNode("Texto do Span"));

container.appendChild(el);