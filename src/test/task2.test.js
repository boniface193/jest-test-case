const { reversedStr } = require('../task2.js');

describe('Unit test for `reversedStr()`', () => {
  test('It should take a string as an argument and return it reversed', () => {
    expect(reversedStr('str')).toBe('rts');
  });
});
