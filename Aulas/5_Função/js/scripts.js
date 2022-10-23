var nome = "Yu";

mostrarNome(nome);

function mostrarNome(nome)
{
    document.write(nome);
}

var x = 1;
var y = 2;

var somaUm = soma(x, y);

console.log(somaUm);

function soma(x, y){
    var soma = x + y;
    return soma;
}