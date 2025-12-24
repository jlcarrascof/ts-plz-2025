function greeting(name: string, greet?: string): string {
    if (greet) {
        return `${greet}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greeting('Amin'));
console.log(greeting('Amin', 'Good morning'));
