let sales: number = 123_456;
let course: string = "Typescript";
let isPublished: boolean = true;

//Arrays
let numbersArray: number[] = [1, 2, 135_51];

//Tuples
let user: [number, string] = [0, "Hassam Sohail"];

//Tuples are fixed Length Arrays
//It is recommened to use it two values and not more (Objects are better for those)
//let user:[number, string] = [0, "Hassam Sohail", 13] == Error

//Enums
const enum ShirtSize {
  Small = 0,
  Medium,
  Large,
}

let mySize: ShirtSize = ShirtSize.Large;
console.log("mySize", mySize);
//

//Function
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(calculateTax(51_000, 2023));

//Object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // Function in typescript Object
} = {
  id: 5,
  name: "Hassam",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Array of Objects
let arry: { id: number; name: string }[] = [];
arry.push({ id: 0, name: "Hassam" });

//Defining a Type
type Employee = {
  readonly id: number;
  name: string;
};

//Array of Objects using Custom Type
let customArray: Employee[] = [];
customArray.push({ id: 5, name: "Hassam" });
customArray.push({ id: 7, name: "Hassam s" });

//Union Type
function kgToLbs(weight: number | string): number {
  //Narrowing
  //Here I am narrowing the type to number to get all the methods available for a number type
  // and the else by default would be string providing all the methods for string type
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

//Literal
let quanitiy: 50 | 100 = 100;

type Metric = "cm" | "inch";

let size: Metric = "cm";
