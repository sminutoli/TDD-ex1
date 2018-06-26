import expect from "expect";

const app = document.getElementById("app");

function primeFactorOf(numberToFactorize) {
  const primes = [];

  if (numberToFactorize % 2 == 0) {
    primes.push(2);
    numberToFactorize /= 2;
  }
  if (numberToFactorize % 2 == 0) {
    primes.push(2);
    numberToFactorize /= 2;
  }
  if (numberToFactorize > 1) primes.push(numberToFactorize);

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

{
  const actual = primeFactorOf(4);
  const expected = [2, 2];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>4 { 2, 2 } pass</p>`;
}

{
  const actual = primeFactorOf(5);
  const expected = [5];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>5 { 5 } pass</p>`;
}

{
  const actual = primeFactorOf(6);
  const expected = [2, 3];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>6 { 2, 3 } pass</p>`;
}

{
  const actual = primeFactorOf(7);
  const expected = [7];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>7 { 7 } pass</p>`;
}

{
  const actual = primeFactorOf(8);
  const expected = [2, 2, 2];
  expect(actual).toEqual(expected);
  app.innerHTML += `<p>8 { 2, 2, 2 } pass</p>`;
}
