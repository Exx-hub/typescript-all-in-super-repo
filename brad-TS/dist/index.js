"use strict";
// let id: number = 5;
// id = "alvin";
// console.log('ID:', id)
// BASIC TYPES
let id = 5;
let myName = 'alvin';
let isLoading = true;
let thisIsAny = 5;
// initialize a variable without value but with a type
let age;
// age = true  // type error
age = 34;
// array
let ids = [1, 2, 3, 4, 5];
// ids.push('hello') // throws error, array accepts numbers only
let ids2 = [1, true, null]; // array that accepts any data type as value
// tuple - array with specific data types and specific position/index in the array
let person = [1, "alvin", true];
// tuple array - an array with tuple/s as values
let employee;
employee = [
    [1, "david"],
    [2, "alvin"]
];
// Union
let uuid = 22;
// uuid = 5  // ts will accept
// uuid = 'alvin' // also acceptable
// uuid = true // throws error cause it only accepts string or number 
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
// Object
let user6;
user6 = {
    id: 4,
    name: 'mike'
};
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: 'David'
};
const user3 = {
    id: true,
    name: 3
};
const user4 = {
    id: 5,
    name: 'mark'
};
// Type Assertion
let cid = 1;
let customerId = cid;
// customerId = true // error
let customerId2 = cid;
// customerId2 = true // error as well
// Functions
// function addNum(x,y){
//     return x + y
// } - throws error in parameter types. its okay in the global scope to define something with no type but in functions you should explicitly state type
function addNum(x, y) {
    return x + y;
}
// addNum("1",2) // throws error
// addNum(2,3)
function log(message) {
    console.log(message);
}
const user15 = {
    id: 500,
    name: "android"
};
let p1 = "true";
const add = (x, y) => x + y;
const subtract = (a, b) => a - b;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'alvin');
// brad.id = 4 // id property is private an can only be accessible inside the class
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const intern1 = new Employee(101, "david", "intern");
// console.log(intern1)
// console.log(intern1.register())
// Generics
// function getArray(items: any[]): any[]{
//     return new Array().concat(items)
// }
// let numArr = getArray([1,3,4,5])
// let strArr = getArray(["alvin","david", "mark"])
// console.log({numArr,strArr})
// numArr.push('hello')
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 3, 4, 5]);
let strArr = getArray(["alvin", "david", "mark"]);
console.log({ numArr, strArr });
// numArr.push("1") // throws error should be number
numArr.push(1);
