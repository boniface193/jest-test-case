class Calc {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  Add() {
    return this.a + this.b;
  }

  Substract() {
    return this.a - this.b;
  }

  Divide() {
    return this.a / this.b;
  }

  Multiply() {
    return this.a * this.b;
  }
}

module.exports = { Calc };