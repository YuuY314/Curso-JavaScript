var idade = 16;

while(idade < 18){
    console.log("Sua idade é insuficiente. "+idade);
    idade++;
}

var v = ["Yu", 16, true];
var i = 0;

while(i < 4){ //i <= 3
    console.log(v[i]);
    i++;
}

i = 0;

var palavra = "Batata";
while(i < 7){ //i <= 6
    console.log(palavra[i]);
    i++;
}

/*
parece que vou ter que me acostumar com o menor igual
porque aparece undefined no final de cada while
ou optar pelo for
*/

for(var i = 0; i < 10; i++){
    console.log(i);
}

v = ["Rafael Yu", 17, false];

for(var i = 0; i < v.length; i++){
    console.log(v[i]);
}