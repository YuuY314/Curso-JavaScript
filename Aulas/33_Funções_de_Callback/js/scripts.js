function show(num){
    console.log("A operação teve resultado de:"+num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function mult(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, show);

mult(2, 4, show);