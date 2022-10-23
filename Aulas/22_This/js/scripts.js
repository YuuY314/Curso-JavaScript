var num = 16;

console.log(this.num);
console.log(num);

let pessoa ={
    nome: "Yu",
    idade: 16,
    falar: function(nome){
        console.log("Olá, "+nome);
    },
    dizerNome: function(){
        console.log("Eu me chamo "+this.nome);
    },
    aniversario: function(){
        this.idade++;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

alert("Olá");



