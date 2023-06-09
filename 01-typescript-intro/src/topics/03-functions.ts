function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(1, 2);

// ARROW FUNCTIONS
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(1, 2);

console.log(result); // number
//console.log(result2); // string

function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const muliplyResult: number = multiply(5);

