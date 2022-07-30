let sales: number = 123_456_789;
let course: string = "Typescript";
let isPublished: boolean = true;

let level;

function render(doc: any): void {
  console.log(doc);
}

let numbers = [];

// tuple - try to keep tuples to up to two values
let user: [number, string] = [3, "alvin"];

// Enums
const enum ShirtSizes {
  xl = 100,
  l,
  m,
  sm,
}

let mySize: ShirtSizes = ShirtSizes.xl;

console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  // let x: number = 100

  if (taxYear < 2020) {
    return income * 1.2;
  }
  // if does not meet condition, by default js will return undefined

  return income * 1.3;
}

calculateTax(50_000);

// Objects

interface EmployeeInterface {
  id: number;
  name: string;
}

let employee: {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
} = {
  id: 123,
  name: "Alvin",
  retire: (date: Date) => {
    console.log(date);
  },
};
