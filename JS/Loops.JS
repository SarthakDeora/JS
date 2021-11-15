console.log('LOOPS');


//There are 3 types of loops
//1. While loop
//2. For Loop
//3. Do-While Loop
// An object with some properties 

//While Loop

let anyVariable = 0;
while (anyVariable <= 100) {
    console.log(anyVariable);
    anyVariable++
}

//for loop
for (let variable = 0; variable < 100; variable++) {
    console.log(variable);

}

//do while loop
let hello = 0;
do {
    console.log(hello);
    hello++;
} while (hello < 100);

var person = { name: "Sarthak", language: "JavaScript", age: 14 };
// Loop through all the properties in the object  
console.log(typeof person);
for (var i in person) {
    console.log(i + " = " + person[i]);
}

arr = [3, 6, 8, 3, 2, , 8, 6];
arr.forEach(function(element) {
    console.log(element)
});


let obj = {
    name: 'Sarthak Deora',
    age: 14,
    profession: 'Student',
    class: 9,
    humour: 'next level'
}

for (let key in obj) {
    console.log(`The ${key} of the person is ${obj[key]}`);
}