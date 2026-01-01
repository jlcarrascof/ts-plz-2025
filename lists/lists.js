"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Amin", "Marce", "Miranda"];
console.log("Names List:", names);
let ages = [39, 25, 30];
console.log("Ages List:", ages);
let mixedList = ["Amin", 39, true];
console.log("Mixed List:", mixedList);
let people = [
    { name: "Amin", age: 39, isDeveloper: true },
    { name: "Juan", age: 25, isDeveloper: false },
    { name: "Maria", age: 30, isDeveloper: true },
];
console.log("People List:", people);
people.push({ name: "Miranda", age: 30, isDeveloper: true });
console.log("People List:", people);
// Tuple example
let person;
person = ["Amin", 39, true];
console.log("Person Tuple:", person);
let peopleTuple = [];
peopleTuple.push(["Amin", 39, true]);
peopleTuple.push(["Marce", 40, true]);
peopleTuple.push(["Miranda", 7, false]);
peopleTuple.forEach(person => {
    console.log("Person from Tuple List:", person);
    let name = person[0];
    let age = person[1];
    let isDeveloper = person[2];
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Is Developer:', isDeveloper);
});
// Enums example
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Monday"] = 0] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 1] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 2] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 3] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 4] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 5] = "Saturday";
    DayOfWeek[DayOfWeek["Sunday"] = 6] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
let today = DayOfWeek.Wednesday;
console.log("Day of the Week:", DayOfWeek[today]);
//# sourceMappingURL=lists.js.map