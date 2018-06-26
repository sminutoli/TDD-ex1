export default function primeFactorOf(numberToFactorize) {
  const primes = [];

  let divisor = 2;
  while (numberToFactorize > 1) {
    while (numberToFactorize % divisor === 0) {
      primes.push(divisor);
      numberToFactorize /= divisor;
    }
    divisor++;
  }

  return primes;
}
