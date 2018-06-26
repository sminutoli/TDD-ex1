export default function primeFactorOf(numberToFactorize) {
  let factors;
  let divisor;

  initialize();

  while (isFactorizable()) factorize();

  return factors;

  function initialize() {
    factors = [];
    divisor = 2;
  }

  function isFactorizable() {
    return numberToFactorize > 1;
  }

  function factorize() {
    while (numberToFactorize % divisor === 0) {
      factors.push(divisor);
      numberToFactorize /= divisor;
    }
    calculateNextDivisor();
  }

  function calculateNextDivisor() {
    divisor++;
  }
}
