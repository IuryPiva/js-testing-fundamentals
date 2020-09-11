import { sumAsync, subtractAsync } from "../math";

test('sum adds numbers asynchronously', async () => {
  const expected = 10;
  const result = await sumAsync(3, 7);
  expect(result).toBe(expected);
})

test('subtract subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3);
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

async function test(title: string, callback: () => any) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) { 
    console.error(`❌ ${title}`);
    console.error(error);
  }
}
