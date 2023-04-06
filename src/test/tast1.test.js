const { characterCount } = require('../task1.js');

describe('Unit test for `characterCount()`', () => {
  test('expected lenght as number only', () => {
    expect(typeof (characterCount('str'))).toBe('number');
  });

  test('expected lenght of `str` to be 3', () => {
    expect(characterCount('str')).toBe(3);
  });

  test('expected lenght not to be greater than 10 and not less than 1', () => {
    expect(characterCount('str')).not.toBe(0);
    expect(characterCount('str')).not.toBeGreaterThan(10);
  });
});
