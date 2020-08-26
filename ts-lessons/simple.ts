import { sum, subtract } from "../math";

test('sum adds numbers', () => {
  const expected = 10;
  const result = sum(3, 7);
  expect(result).toBe(expected);
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
})

function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected)
        throw new Error(`${actual} is not equal to ${expected}`);
    },
  };
}

function test(title: string, callback: () => any) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) { 
    console.error(`❌ ${title}`);
    console.error(error);
  }
}
