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
