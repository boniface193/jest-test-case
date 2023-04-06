const { Calc } = require('../task3.js');

describe('Unit test for `Calc()`', () => {
  test('new Calc should be an object', () => {
    const calculator = new Calc();
    expect(typeof calculator).toBe('object');
  });

  test('calculator.Add should be a function', () => {
    const calculator = new Calc();
    expect(typeof calculator.Add).toBe('function');
  });

  test('a + b should be a 3', () => {
    const calculator = new Calc(3, 3);
    expect(calculator.Add()).toEqual(6);
  });

  test('expect calculator.Add to be NaN', () => {
    const calculator = new Calc();
    expect(calculator.Add()).toBeNaN();
  });

  test('calculator.Substract should be a function', () => {
    const calculator = new Calc();
    expect(typeof calculator.Substract).toBe('function');
  });

  test('a - b should be a 2', () => {
    const calculator = new Calc(6, 4);
    expect(calculator.Substract()).toEqual(2);
  });

  test('expect calculator.Substract to be NaN', () => {
    const calculator = new Calc();
    expect(calculator.Substract()).toBeNaN();
  });

  test('calculator.Divide should be a function', () => {
    const calculator = new Calc();
    expect(typeof calculator.Divide).toBe('function');
  });

  test('a / b should be a 2', () => {
    const calculator = new Calc(4, 2);
    expect(calculator.Divide()).toEqual(2);
  });

  test('expect calculator.Divide to be NaN', () => {
    const calculator = new Calc();
    expect(calculator.Divide()).toBeNaN();
  });

  test('calculator.Multiply should be a function', () => {
    const calculator = new Calc();
    expect(typeof calculator.Multiply).toBe('function');
  });

  test('a * b should be a 9', () => {
    const calculator = new Calc(3, 3);
    expect(calculator.Multiply()).toEqual(9);
  });

  test('expect calculator.Multiply to be NaN', () => {
    const calculator = new Calc();
    expect(calculator.Multiply()).toBeNaN();
  });
});
