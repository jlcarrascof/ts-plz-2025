var variableAny;
// variableAny = "Hello";
variableAny = 42;
// variableAny = true;
console.log('Value of variableAny is:', variableAny);
var variableUnknown;
variableUnknown = "Hello";
// variableUnknown = 42;
// variableUnknown = true;
if (typeof variableUnknown === 'string') {
    console.log('variableUnknown is a string:', variableUnknown);
}
