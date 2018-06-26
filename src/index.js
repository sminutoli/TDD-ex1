import expect from "expect";
import { default as primeFactorOf } from "./primeFactorOf";

const app = document.getElementById("app");
app.innerHTML += `<h1>Numeros primos</h1>`;

const tests = [];

const oneHasNoPrimeFactors = () => {
  const actual = primeFactorOf(1);
  const expected = [];
  expect(actual).toEqual(expected);
};
tests.push(oneHasNoPrimeFactors);

const aPrimeHasItselfAsPrime = () => {
  const actual = primeFactorOf(2);
  const expected = [2];
  expect(actual).toEqual(expected);
};
tests.push(aPrimeHasItselfAsPrime);

const numbersWithSamePrimeFactor = () => {
  const actual = primeFactorOf(4);
  const expected = [2, 2];
  expect(actual).toEqual(expected);
};
tests.push(numbersWithSamePrimeFactor);

const numbersWithMixedFactors = () => {
  const actual = primeFactorOf(6);
  const expected = [2, 3];
  expect(actual).toEqual(expected);
};
tests.push(numbersWithMixedFactors);

const bigNumberTest = () => {
  const numberToFactorize = 2 * 2 * 3 * 3 * 11 * 11;
  const actual = primeFactorOf(numberToFactorize);
  const expected = [2, 2, 3, 3, 11, 11];
  expect(actual).toEqual(expected);
};
tests.push(bigNumberTest);

tests.forEach(aTest => {
  try {
    aTest();
    app.innerHTML += `<p style="color: green">${aTest.name} pass</p>`;
  } catch (err) {
    app.innerHTML += `<p style="color: red">${aTest.name} not pass ${err}</p>`;
  }
});
