var v = ["Espada", "Escudo", "Arco", "Lança", "Maça", "Alabarda", "Adaga"];

var vUl = document.createElement("ul");

var body = document.getElementsByTagName("body");

console.log(body[0]);

body[0].appendChild(vUl);

var vBody = document.getElementsByTagName("ul");

console.log(vBody[0]);

for(var i = 0; i < v.length; i++){

    var liFor = document.createElement("li");
    
    var textoLi = document.createTextNode(v[i]);

    liFor.appendChild(textoLi);

    vBody[0].appendChild(liFor);

}

//Tenho que revisitar para entender cada elemento que foi escrito