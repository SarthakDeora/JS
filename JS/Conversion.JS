let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

res = Boolean(1); // true
res = Boolean(0); // false
res = Boolean("hello"); // true
res = Boolean(""); // false


let res1;
let a = 90;
res1 = String(a); // returns a string from a number variable a
String(378009); // returns a string from a number literal 378009
console.log(a.toString());
console.log((378009).toString());

console.log(parseInt('$100 dollars')); // NaN
console.log(parseInt('+10.25990 kg')); // 10
console.log(parseFloat(' +10.25 kg')); // 10.25
console.log(parseFloat('ABC')); //NaN