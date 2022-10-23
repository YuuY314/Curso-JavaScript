let pessoa ={
    nome: "Yu",
    idade: 16,
    falar: function(nome){
        console.log("Olá, "+nome);
    },
    soma: function(x, y){
        return x + y;
    }
};

console.log(pessoa.nome);

pessoa.falar("Rafael");

var soma = pessoa.soma(1, 2);

console.log(soma);