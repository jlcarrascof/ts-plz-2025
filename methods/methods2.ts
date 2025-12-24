function greeting(name: string, greet?: string): string {
    if (greet) {
        return `${greet}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greeting('Amin'));
console.log(greeting('Amin', 'Good morning'));

// Multiple params .....

function addAll(...numbers: number[]): number {
    return numbers.reduce((accumulate, actual) => accumulate + actual, 0);
}

console.log(`Result of adding all numbers: ${addAll(1,2,3,4,5)}`);

// Default values ....
function sayGoodbye(name: string, goodbye: string = "Goodbye"): string {
    return `${goodbye}, ${name}`;
}

console.log(sayGoodbye('Amin'));
console.log(sayGoodbye('Amin', 'See ya later'));
