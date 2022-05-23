// Modules
let prompt = require('prompt-sync')();
// This is an external package that u can install mostly using npm
// This has a lot of use case, u will absolutely need an external script or package on ur projects
// How to use each external packages is mostly available on their own Documentation

// Variables
var a
const b = 'Const variables cannot be empty!'
let c

// Data types
let string = 'This is a string' // String can be define with either '', "", or ``
let number = 123456789
let boolean = true // insert either true or false
let list = [1, 2, 3, 'a', 'b', 'c', true, false] // List can be anything as long as you wrap your data with []
let objects = {
    a: 'This is a string object',
    b: 123456789,
    c: true,
    d: false
}
// Same like list, but this time you need to wrap your data with {} and you need to specify each data variables with :
// for example, var a in objects have a string, var b have numbers, var c is a boolean

// Calling list
let myList = [1, 2, 3, 'a', 'b', 'c', true, false]
console.log(myList); // Use this to get all data inside your list
console.log(myList[0]) // Use this one to specify wich data you wanna take.
// For instance, if you wanna console.log only 'b', then you need to write myList[4], because the first item in your list has an index value of 0, not 1.. if you call myList[1] then it will show 2

// Calling Objects
let myObjects = {
    a: 'myData',
    b: 123456789,
    c: true,
    d: false
}
console.log(myObjects.a)
//To call an object, you need to specify which variable your data is in.
// For example, if you wanna grab the numbers, then call myObjects.b
// notice that it's using . instead of numbers like list, keep that in mind!

// Funtions
let myFunction = function () {
    console.log("I'm a function!")
}
myFunction();
// Now a function is.. well, functions, u make it to run a functions.. it can be anything really.. above example is a function without props.. Not really handy to be honest

let propFunc = function (a, b) {
    let plus = Number(a) + Number(b);
    console.log(plus);
}
let num1 = prompt('First Number: ');
let num2 = prompt('Second Number: ');
propFunc(num1, num2);
// Now this is a function with props, this is how mostly you want to use functions. This has a lot of use case
// like getting datas, combining datas, seperating datas, etc...

// Conditionals
let conA = 1 + 1
if (conA === 2) {
    console.log('You are right!')
} else {
    console.log('No, Something is wrong here :(')
};
// This is called conditionals, so. If (insert your expected result here){then what should it do inside here} else{if the first condition is not right, then what should it do over here}
// you can include the else or not.. up to you, but it's a good practice to use it, so you can handle errors more easily!
// if you need more than 2 conditions, then just use else if(){} like that.

// Loops
let i = 0;
while (i <= 10) {
    console.log(i);
    i++
};
// This is a loop!, you can add loops in your project to repeat some part of your script that needs to be repeated
// you can also use, do or if to make a loop!

// let me show u how to use javascript/node to build a calculator!
function calculator(a, b, c) {
    if (c === '1') {
        console.log(Number(a) + Number(b));
    } else if (c === '2') {
        console.log(Number(a) - Number(b));
    } else if (c === '3') {
        console.log(Number(a) * Number(b));
    } else if (c === '4') {
        console.log(Number(a) / Number(b));
    } else {
        console.log('Please input the right functions!')
    };
};
console.log('What do you want to do?');
console.log('1. Add\n2. Substract\n3. Multiply\n4. Divide');
let mode = prompt('');
let number1 = prompt('First Number: ');
let number2 = prompt('Second Number: ');
calculator(number1, number2, mode);

// This is the basic of javascript or node js. Please learn more on external source like w3school!

