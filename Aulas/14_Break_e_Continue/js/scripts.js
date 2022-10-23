var x = 10;

while(x < 100){
    console.log(x);
    if(x === 50){
        break;
    }
    x += 10;
}

console.log("Deu o break");

x = 10;

while(x < 100){
    x += 10;

    if(x === 60 || x === 30){
        console.log("Deu o continue");
        continue;
    }
    
    console.log(x);
}