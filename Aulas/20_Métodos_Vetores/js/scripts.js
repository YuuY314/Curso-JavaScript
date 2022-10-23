var v = [1,2,3,4,5];

v.push(6);
v.push(7);

console.log(v);

v.pop();

console.log(v);

v.unshift(0);
v.unshift(0);

console.log(v);

v.shift();

console.log(v);

console.log(v[v.length-1]);

console.log(Array.isArray(v));
console.log(Array.isArray(5));

var v2 = [1,2,3,5,6,8,7];

v2.splice(3, 0, 4);

console.log(v2);

v2.splice(6, 1);

console.log(v2);

console.log(v2.indexOf(4));

var v3 = ["Eu", "sou", "a", "Lenda"];

console.log(v3.join(" "));

console.log(v3.reverse());