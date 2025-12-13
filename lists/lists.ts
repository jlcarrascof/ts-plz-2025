let names: string[] = ["Amin", "Marce", "Miranda"];
console.log("Names List:", names);

let ages: number[] = [39, 25, 30];
console.log("Ages List:", ages);

let mixedList: any[] = ["Amin", 39, true];
console.log("Mixed List:", mixedList);

interface Person {
  name: string;
  age: number;
  isDeveloper: boolean;
}

let people: Person[] = [
  { name: "Amin", age: 39, isDeveloper: true },
  { name: "Juan", age: 25, isDeveloper: false },
  { name: "Maria", age: 30, isDeveloper: true },
];
console.log("People List:", people);

people.push({ name: "Miranda", age: 30, isDeveloper: true });
console.log("People List:", people);

// Tuple example

let person: [string, number, boolean];
person = ["Amin", 39, true];
console.log("Person Tuple:", person); 

let peopleTuple: [string, number, boolean][] = [];
peopleTuple.push(["Amin", 39, true]);
peopleTuple.push(["Marce", 40, true]);
peopleTuple.push(["Miranda", 7, false]);

peopleTuple.forEach(person => {
    console.log("Person from Tuple List:", person);

    let name: string = person[0];
    let age: number = person[1];
    let isDeveloper: boolean = person[2];

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Is Developer:', isDeveloper);
});

// Enums example

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday, 
  Friday,
  Saturday, 
  Sunday
}

let today: DayOfWeek = DayOfWeek.Wednesday;
console.log("Day of the Week:", today);