interface Address {
    street: string;
    _number: number;
    city?: string; // optional entry
}

let address: Address = {
    street: "Fake street",
    _number: 123,
    city: "Springfield"
}

console.log("Address: ", address);

// Read only properties 

interface Person {
    readonly name: string;
    readonly age: number;
    readonly isDeveloper: boolean;
}

let readPerson: Person = {
    name: "Amin",
    age: 39,
    isDeveloper: true
}

console.log("Person: ", readPerson);

// readPerson.name = "Marce"; // This is an error.

