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

