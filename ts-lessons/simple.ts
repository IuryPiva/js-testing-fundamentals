const sum = (a: number, b: number) => a - b;
const subtract = (a: number, b: number) => a - b;

const result = sum(3, 7);
const expected = 10;

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`);
