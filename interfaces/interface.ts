interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}

let person: Person = {
    name: "Amin",
    age: 39,
    isDeveloper: true
}

console.log('Person: ', person);

let people: Person[] = [
    { name: "Amin", age: 39, isDeveloper: true },
    { name: "Juan", age: 25, isDeveloper: false },
    { name: "María", age: 30, isDeveloper: true },
]

console.log('People: ', people);