import { add, subtract, divide, multiply } from './calculator';

test('Add', () => {
  expect(add(2, 5)).toBe(7);
});

test('Subtract', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('Divide', () => {
  expect(divide(32, 8)).toBe(4);
});

test('Multiply', () => {
  expect(multiply(5, 5)).toBe(25);
});
