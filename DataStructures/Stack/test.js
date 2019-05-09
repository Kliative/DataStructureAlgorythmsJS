// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

const Stack = require('./Stack');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('stack can add and remove items', () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
});

test('stack can follows first in, last out', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.peek()).toEqual(1);
  expect(s.pop()).toEqual(1);
});
