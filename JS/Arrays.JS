console.log('hello ji');
let marks = [23, 56, 89, 90, 22];
let fruits = ['Apple', 'Orange', 'Mango'];
let mixed = ['Apple', 23, 45, 'Sarthak'];


let arr = new Array(235, 23, 'hello', 65);
console.log(arr); // Array is an Object
console.log(marks[4]);
console.log(Array.isArray(arr)); // this will tell if the variable is an array or not
arr[0] = 'lol'; // this is how you can replace items in an array 
console.log(arr);


let value = marks.indexOf(56); // the value of value is the index of 56 in the array marks
console.log(value);

//Mutating arrays

marks.push(3434); //this helps puting an item in the end of the array
console.log(marks);
marks.unshift(1212); // this helps in puting an item in the starting of the array
console.log(marks);
marks.pop(); // this will remove the item in the end
console.log(marks);
marks.shift();
console.log(marks); //  this will remove the starting item of the array
marks.splice(0, 4); // this will start from the index given and will delete 4 items starting from there.
console.log(marks);
marks.concat