type EmployeeType = {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
};

interface IEmployee {
  readonly id: number;
  name: string;
  retire?: (date: Date) => void;
}

let employee2: EmployeeType = {
  id: 123,
  name: "Alvin",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "string") return +weight * 2.2;

  return weight * 2.2;
}

// Intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
type Quantity = 50 | 100;

let quantity: Quantity = 100;

// Nullable Types
function greet(name: string | null | undefined): void {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}

greet(undefined);

// Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional Property Access Operator
console.log(customer?.birthday?.getFullYear());

// Optional Element Access Operator
// cusomters?.[0]

// Optional Call
// -- can also be used for functions
