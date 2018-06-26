export default class PrimeFactor {
  constructor(aNumberToFactorize) {
    if (aNumberToFactorize < 1) {
      throw Error(PrimeFactor.INVALID_NUMBER);
    }
    this.numberToFactorize = aNumberToFactorize;
  }

  execute() {
    this.initialize();
    while (this.isFactorizable()) this.factorize();
    return this.factors;
  }

  initialize() {
    this.divisor = 2;
    this.factors = [];
  }

  isFactorizable() {
    return this.numberToFactorize > 1;
  }

  factorize() {
    while (this.numberToFactorize % this.divisor === 0) {
      this.factors.push(this.divisor);
      this.numberToFactorize /= this.divisor;
    }
    this.calculateNextDivisor();
  }

  calculateNextDivisor() {
    this.divisor++;
  }
}

PrimeFactor.of = aNumber => new PrimeFactor(aNumber);
PrimeFactor.INVALID_NUMBER = "Is not factorizable";
