var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto);

var title = document.querySelector("#title");

var pai = title.parentNode; //body

pai.replaceChild(el, title); 