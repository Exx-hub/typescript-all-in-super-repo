"use strict";
let sales = 123456789;
let course = "Typescript";
let isPublished = true;
let level;
function render(doc) {
    console.log(doc);
}
let numbers = [];
let user = [3, "alvin"];
let mySize = 100;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2020) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(50000);
let employee = {
    id: 123,
    name: "Alvin",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map