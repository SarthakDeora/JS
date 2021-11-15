console.log('hello this is if else file');

let salary = 500;
if (salary > 1000) {
    console.log("My Salary is greater than 1000");
} else {
    console.log("My Salary is less than or equal to 1000");
}


if (salary > 1000) {
    console.log("My Salary is greater than 1000");
} else if (salary < 1000) {
    console.log("My Salary is less than 1000");
} else {
    console.log("My Salary equal to 1000");
}

console.log(5 > 5 ? "Greater" : "Smaller");

switch (salary) {
    case 18:
        console.log('you are 18');
        break;
    case 500:
        console.log('you are 500');
        break;
    default:
        console.log('this is the default statement');
        break;
}