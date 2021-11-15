var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i

var str1 = "JavaScript"
var str2 = str1.concat(" is", "awesome ")
console.log(str2);
//Output: JavaScript is awesome

var str3 = "Hi, my name is Sam!";
var str4 = str3.indexOf("locate");
console.log(str4);
//Output: -1

var myString2 = 'javascript Node.js';
console.log(myString2.lastIndexOf('N'));
//output: 11

var text = "programming"
var mystr = text.slice(0, 4)
console.log(mystr)
    //Output:- "prog"

var txt = "a,b,c,d,e"; // String
console.log(txt.split(",")); // Split on commas
console.log(txt.split(' ')); // Split on spaces

//substring(from, [to])
var myString3 = 'javascript Programming';
myString3 = myString3.substring(0, 10);
console.log(myString3)
    //output: javascript
console.log('********END********');