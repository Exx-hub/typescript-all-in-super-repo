import { useState } from "react"

// Array -- basic generic. 
type arr = Array<string> // what type you put makes it an array of that type

// T -- the generic type that could be passed to the function


              // allows function to accept Generic Type
const last = <T extends unknown> (arr: T[]): T => { // accepts an array of generics
    return arr[arr.length - 1]
}

const l = last([1,2,3])
 
const l2 = last(["1","2","3"])

const l3 = last([true,false,true])

//===========================

// function takes in generic type of params, value param is generic and returns array of generic type
// if you pass a string will accept and return array of strings. etc.
const makeArrayOfPassedType = <T extends unknown> (value: T): T[] => {
  return Array.from({length: 4}, () => value)
}

const genericArr = makeArrayOfPassedType("hi");
const genericArr2 = makeArrayOfPassedType(2)
const genericArr3 = makeArrayOfPassedType(true)

console.log(genericArr)


// taking in two generic type. those are your two params T and Y. and returns a tuple of T and Y
// so if your params are 1 and "hello"
// T becomes a number type and Y becomes string type => returns a tuple of number and string
const makeArrayWithTwoParams = <T, Y = number> (a: T,b: Y): [T,Y] => {
  return [a,b]                      // default value
}

console.log(makeArrayWithTwoParams("hello", "world"))
console.log(makeArrayWithTwoParams(100, 500))
console.log(makeArrayWithTwoParams(1, "world"))
console.log(makeArrayWithTwoParams<string | null, number>(null, 3)) // explicitly typed. above are inferred.
console.log(makeArrayWithTwoParams<string | null>("world", 2))




// Extending

interface Person {firstName: string, lastName: string}

const makeFullName = <T extends Person> (obj: T) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const person = makeFullName({firstName: "alvin",  lastName: "Acosta", age: 15})


// InterFace

interface Tab<T> {
  id: string;
  position: number;
  data: T
}

type NumberTab = Tab<number> // so this is saying that in this instance, the T in interface Tab is number type
type StringTab = Tab<string> // string for this type

const newTab: Tab<string> = {
  id: "123",
  position: 2,
  data: "hello" // string hello is accepted, if NumberTab is used, data should be a number
}

const numberTab: NumberTab = {
  id: "123",
  position: 2,
  data: 2
}

// PROPS
interface IBenAwadGenericsProps {
  name: string
}


function BenAwadGenerics({name}: IBenAwadGenericsProps) {
  const [state] = useState<{fullName: string | null}>({fullName: ""});
  


  return <div>hello {name}</div>;
}

export default BenAwadGenerics;


interface FormProps<T>{
  values: T;
  children: (values: T) => JSX.Element
}


const Form = <T extends {}>({values, children}: FormProps<T>) => {
  return children(values);
}
