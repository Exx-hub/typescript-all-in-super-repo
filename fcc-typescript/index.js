"use strict";
// export {}
let a = 2;
let firstName = 'alvin';
let me = "alvin";
// let name = 'alvin'
let age;
age = 34;
age = "alvin";
// ARRAYS IN TS
let stringArray = ["alvin", "lop"];
let booleanArray = [true, false];
let objectArray = [
    [], { name: 'alvin' }
];
let numberArray = [3, 1, 4, 6];
let anyArray = [true, 1, false, "alvin"]; // any basically reverts TypeScript back into JavaScript
stringArray.push('me');
// union types
let unionArray = [true, false, 1, "me", {}];
// unionArray.push(null)// error cause null not defined in typing
unionArray.push(2); // no error
let string2 = "alvin"; // does not need to be initially typed cause TS will infer that this is type string
// string = 2 // error
// tuples
let tupleArr = ["alvin", true, 3];
// let tupleArr2: [string,boolean,number] = [1,2,3] // error 
// let tupleArr2: [string,boolean,number] = [1,"me",true] // error 
// OBJECTS IN TS
let objectTest;
objectTest = {
    name: "alvin",
    age: 34,
    isProgrammer: true
};
objectTest.name = "me";
let person;
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
let student1 = {
    name: "alvin",
    age: 24,
    withHonors: true
};
let student2 = {
    name: 'lop',
    age: 28,
    withHonors: false
};
// console.log(student2);
// FUNCTIONS
//inferred - typescript know the return value is a string
const circle = (arg) => {
    return `the circumference is ` + Math.PI * arg;
};
// console.log(circle(2))
// explicit - state type of arguments and also the return value
const add = (num1, num2) => {
    return num1 + num2;
};
// console.log(add(1,2));
// optional parameter with ? - also with union type string or number
const greeting = (name, age, studentNum) => {
    return `hello ${name}, ${age} years old - ${studentNum}`;
};
// console.log(greeting('alvin', 34, 'n/a'))
// console.log(greeting('lop', 35, 12345))
// console.log(greeting('David', 37))
const addNumbers = (num1, num2, num3) => {
    console.log(num3);
    return num1 + num2;
};
// console.log(addNumbers(1,2, 'i am nothing'))
// a function that returns nothing is said to return void
const voidFunction = (message) => {
    console.log("1:", message);
};
voidFunction('hello');
// FUNCTION SIGNATURE
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello;
// Define the function, satisfying its signature
sayHello = (name) => {
    console.log('Hello ' + name);
};
sayHello('Danny'); // Hello Danny
let myAge = '100';
myAge = 200;
myAge = [];
myAge = { me: 2, her: 2 };
const person1 = {
    name: 'alvin',
    id: 123
};
const person2 = {
    name: 'lop',
    id: 'n/a'
};
const sayHi = (person) => {
    return `Hi ${person.name}`;
};
// without using alias
// const sayHi = (person: {name: string, id: string | number}) => {
//   return `Hi ${person.name}`;
// }
// console.log(sayHi({name: 'alvin', id: 1}));
const link = document.querySelector('a');
link.style.color = "red";
console.log(link);
