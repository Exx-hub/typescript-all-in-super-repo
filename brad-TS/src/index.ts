// let id: number = 5;

// id = "alvin";


// console.log('ID:', id)


// BASIC TYPES
let id: number = 5;
let myName: string = 'alvin';
let isLoading: boolean = true;
let thisIsAny: any = 5

// initialize a variable without value but with a type
let age: number

// age = true  // type error
age = 34


// array
let ids: number[] = [1,2,3,4,5]

// ids.push('hello') // throws error, array accepts numbers only

let ids2: any[] = [1,true,null] // array that accepts any data type as value


// tuple - array with specific data types and specific position/index in the array
let person: [number,string,boolean] = [1,"alvin", true]

 // tuple array - an array with tuple/s as values
let employee: [number,string][]

employee = [
    [1, "david"],
    [2, "alvin"]
]

// Union
let uuid: string | number = 22

// uuid = 5  // ts will accept
// uuid = 'alvin' // also acceptable
// uuid = true // throws error cause it only accepts string or number 


// Enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Left)


// Object


let user6: {
    id: number,
    name: string
}

user6 = {
    id: 4,
    name: 'mike'
}

// user6.name = 4 // throws error name should be string

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'john'
// }

// this may look messy so you can setup object types separately

type User = {
    id: number,
    name: string
}

interface User2 {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

const user2: User = {
    id: 2,
    name: 'David'
}

const user3: any = {
  id: true,
  name: 3
}

const user4: User2 = {
    id: 5,
    name: 'mark'
}


// Type Assertion
let cid: any = 1
let customerId = <number>cid


// customerId = true // error

let customerId2 = cid as number

// customerId2 = true // error as well



// Functions

// function addNum(x,y){
//     return x + y
// } - throws error in parameter types. its okay in the global scope to define something with no type but in functions you should explicitly state type

function addNum(x: number,y: number): number{ // also state type of return value
    return x + y
}

// addNum("1",2) // throws error
// addNum(2,3)


function log(message: string | number): void { // if there is not return value
    console.log(message)
}


// Interfaces - similar to type.

interface UserInterface {
    id: number
    name: string
    age?: number  // optional property for interface objects add a ?
    readonly gender?: string // readonly properties
}

const user15: UserInterface = {
    id: 500,
    name: "android"
}

// user15.age = 2 // will work even if it is not there initially. readonly
// user15.gender = "male" // will throw error cause readonly



// type is not for object only

type Point = number | String
let p1: Point = "true"



// interface with functions
interface MathFunc {
    (x: number, y: number): number
}


const add: MathFunc = (x,y) => x + y;
const subtract: MathFunc = (a,b) => a - b;




interface PersonInterface2 {
    id: number
    name: string
    register(): string 
}


// Classes
class Person implements PersonInterface2 {
    id: number  // public protected and private
    name: string


    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }


    register() {
        return `${this.name} is now registered.`
    }
}

const brad = new Person(1,'alvin')

// brad.id = 4 // id property is private an can only be accessible inside the class


// subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const intern1 = new Employee(101, "david", "intern")

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

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}


let numArr = getArray<number>([1,3,4,5])
let strArr = getArray<string>(["alvin","david", "mark"])

console.log({numArr,strArr})

// numArr.push("1") // throws error should be number
numArr.push(1)