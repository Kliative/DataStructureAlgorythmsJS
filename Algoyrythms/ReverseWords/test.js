const reverseWords = require('./ReverseWords');
const reverse = require('./ReverseWords');
const reverse2 = require('./ReverseWords');
const reverse3 = require('./ReverseWords');


test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
