var names = ["Amin", "Marce", "Miranda"];
console.log("Names List:", names);
var ages = [39, 25, 30];
console.log("Ages List:", ages);
var mixedList = ["Amin", 39, true];
console.log("Mixed List:", mixedList);
var people = [
    { name: "Amin", age: 39, isDeveloper: true },
    { name: "Juan", age: 25, isDeveloper: false },
    { name: "Maria", age: 30, isDeveloper: true },
];
console.log("People List:", people);
people.push({ name: "Miranda", age: 30, isDeveloper: true });
console.log("People List:", people);
// Tuple example
var person;
person = ["Amin", 39, true];
console.log("Person Tuple:", person);
var peopleTuple = [];
peopleTuple.push(["Amin", 39, true]);
peopleTuple.push(["Marce", 40, true]);
peopleTuple.push(["Miranda", 7, false]);
peopleTuple.forEach(function (person) {
    console.log("Person from Tuple List:", person);
    var name = person[0];
    var age = person[1];
    var isDeveloper = person[2];
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Is Developer:', isDeveloper);
});
