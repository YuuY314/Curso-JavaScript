var nome = "Yu";

console.log(nome.length);

console.log(nome[1]);
var frase = "O Naruto pode ser um pouco duro às vezes";
console.log(frase.indexOf("pode"));

var pode = frase.slice(9, 13);

console.log(pode);

var novaFrase = frase.replace("pode", "deve");

console.log(novaFrase);

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

nome = "               Yu                ";
console.log(nome.trim());

nome = "Rafael Yu";
console.log(nome.split(" "));

frase = "eu sou eu";

console.log(frase.indexOf("eu"));
console.log(frase.lastIndexOf("eu"));