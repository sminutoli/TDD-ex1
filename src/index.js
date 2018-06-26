import expect from "expect";

const app = document.getElementById("app");

function primeFactorOf(numberToFactorize) {
  const primes = [];
  if (numberToFactorize == 2) primes.push(2);
  if (numberToFactorize == 3) primes.push(3);
  return primes;
}

app.innerHTML += `<h1>Numeros primos</h1>`;

{
  const actual = primeFactorOf(1).length;
  const expected = 0;
  expect(actual).toBe(expected);
  app.innerHTML += `<p>1 {} pass</p>`;
}

{
  const actual = primeFactorOf(2);
  const expected = [2];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>2 { 2 } pass</p>`;
}

{
  const actual = primeFactorOf(3);
  const expected = [3];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>3 { 3 } pass</p>`;
}
