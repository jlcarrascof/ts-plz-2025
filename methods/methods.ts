function printMessage(message: string): void {
    console.log(message);
}

printMessage(`Hi, I'm a message`);

function add(number1: number, number2: number) {
    return number1 + number2;
}

let result: number = add(5, 10);
console.log(`Your result is: ${result}`);