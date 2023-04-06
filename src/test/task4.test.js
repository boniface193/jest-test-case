const { capitalizedStr } = require('../task4.js');

describe('Unit test for `capitalizedStr()`', () => {
  test('expected to return a capitalized first character', () => {
    expect(capitalizedStr('str')).toBe('Str');
  });
});
