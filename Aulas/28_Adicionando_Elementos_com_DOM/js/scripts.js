//criar elemento com classe
var el = document.createElement("div");

el.classList = "div-criada";

//inserir elemento filho
var container = document.querySelector("#container");

container.appendChild(el);

//inserir elemento com insertBefore
var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-before");

container.insertBefore(el2, el3);