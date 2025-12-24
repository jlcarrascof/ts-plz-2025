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
