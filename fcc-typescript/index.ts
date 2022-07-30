// export {}
let a: number = 2;

let firstName: string = 'alvin'

let me: string = "alvin"

// let name = 'alvin'

let age: string | number;

age = 34;
age = "alvin"


// ARRAYS IN TS
let stringArray: string[] = ["alvin","lop"]
let booleanArray: boolean[] = [true,false]
let objectArray: object[] = [
    [],{name: 'alvin'}
]
let numberArray: number[] = [3,1,4,6]
let anyArray: any[] = [true,1,false,"alvin"]  // any basically reverts TypeScript back into JavaScript

stringArray.push('me')

// union types
let unionArray: (boolean| number | string | object)[] = [true,false,1,"me", {}]
// unionArray.push(null)// error cause null not defined in typing
unionArray.push(2) // no error

let string2 = "alvin"; // does not need to be initially typed cause TS will infer that this is type string
// string = 2 // error

// tuples
let tupleArr: [string,boolean,number] = ["alvin",true,3]
// let tupleArr2: [string,boolean,number] = [1,2,3] // error 
// let tupleArr2: [string,boolean,number] = [1,"me",true] // error 


// OBJECTS IN TS
let objectTest: {
    name: string;
    age: number;
    isProgrammer: boolean;
} 

objectTest = {
    name: "alvin",
    age: 34,
    isProgrammer: true
}

objectTest.name = "me"



let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };

  person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };

// usage of interface for checking multiple object of the same properties and value types
  interface Student {
    name: string;
    age: number;
    withHonors: boolean
  }

  let student1: Student = {
      name: "alvin",
      age: 24,
      withHonors:true
  }

  let student2: Student = {
      name: 'lop',
      age: 28,
      withHonors: false
  }

  // console.log(student2);

  // FUNCTIONS

  //inferred - typescript know the return value is a string
const circle = (arg: number) => {
  return `the circumference is ` + Math.PI * arg;
}

// console.log(circle(2))

// explicit - state type of arguments and also the return value
const add = (num1: number, num2: number): number => {
  return num1 + num2;
}

// console.log(add(1,2));

// optional parameter with ? - also with union type string or number
const greeting = (name: string, age: number, studentNum?: string | number): string => {
  return `hello ${name}, ${age} years old - ${studentNum}`
}

// console.log(greeting('alvin', 34, 'n/a'))
// console.log(greeting('lop', 35, 12345))
// console.log(greeting('David', 37))

const addNumbers = (num1: number, num2: number, num3?:number | string): number => {
  console.log(num3);
  return num1 + num2;
}

// console.log(addNumbers(1,2, 'i am nothing'))



// a function that returns nothing is said to return void
const voidFunction = (message: string): void => {
  console.log("1:", message)

 
}

voidFunction('hello')

// FUNCTION SIGNATURE
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny


let myAge: any = '100';


myAge = 200;
myAge = [];
myAge = {me: 2, her: 2}

// ALIASES
type boolOrNumber = boolean | number;
type stringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: stringOrNumber
}

const person1: PersonObject = {
  name: 'alvin',
  id: 123
}

const person2: PersonObject = {
  name: 'lop',
  id: 'n/a'
}

const sayHi = (person: PersonObject) => {
  return `Hi ${person.name}`;
}

// without using alias

// const sayHi = (person: {name: string, id: string | number}) => {
//   return `Hi ${person.name}`;
// }


// console.log(sayHi({name: 'alvin', id: 1}));


// const link = document.querySelector('a')!;
// link.style.color = "red";
// console.log(link);


// cLASSES and CONSTRUCTORS
// DOM