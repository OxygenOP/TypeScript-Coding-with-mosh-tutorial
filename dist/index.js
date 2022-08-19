"use strict";
let sales = 123456;
let course = "Typescript";
let isPublished = true;
let numbersArray = [1, 2, 13551];
let user = [0, "Hassam Sohail"];
let mySize = 2;
console.log("mySize", mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(51000, 2023));
let employee = {
    id: 5,
    name: "Hassam",
    retire: (date) => {
        console.log(date);
    },
};
let arry = [];
arry.push({ id: 0, name: "Hassam" });
let customArray = [];
customArray.push({ id: 5, name: "Hassam" });
customArray.push({ id: 7, name: "Hassam s" });
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let quanitiy = 100;
let size = "cm";
//# sourceMappingURL=index.js.map