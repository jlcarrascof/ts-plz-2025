let variableAny: any;
// variableAny = "Hello";
variableAny = 42;
// variableAny = true;
console.log('Value of variableAny is:', variableAny);

let variableUnknown: unknown;

// variableUnknown = "Hello";
variableUnknown = 42;
// variableUnknown = true;

if (typeof variableUnknown === 'string') {
    console.log('variableUnknown is a string:', variableUnknown);
}

function throwError(message: string): never {
    throw new Error(message);
}

throwError('This is an error message');