function greeting(name, greet) {
    if (greet) {
        return "".concat(greet, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greeting('Amin'));
console.log(greeting('Amin', 'Good morning'));
// Multiple params .....
function addAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accumulate, actual) { return accumulate + actual; }, 0);
}
console.log("Result of adding all numbers: ".concat(addAll(1, 2, 3, 4, 5)));
