const sum = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`);

result = subtract(7, 3);
expected = 4;

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`);

console.log('Pass all tests');