import expect from "expect";
import { default as PrimeFactor } from "./primeFactor";

const app = document.getElementById("app");
app.innerHTML += `<h1>Numeros primos</h1>`;

const tests = [];

const oneHasNoPrimeFactors = () => {
  const actual = PrimeFactor.of(1).execute();
  const expected = [];
  expect(actual).toEqual(expected);
};
tests.push(oneHasNoPrimeFactors);

const aPrimeHasItselfAsPrime = () => {
  const actual = PrimeFactor.of(2).execute();
  const expected = [2];
  expect(actual).toEqual(expected);
};
tests.push(aPrimeHasItselfAsPrime);

const numbersWithSamePrimeFactor = () => {
  const actual = PrimeFactor.of(4).execute();
  const expected = [2, 2];
  expect(actual).toEqual(expected);
};
tests.push(numbersWithSamePrimeFactor);

const numbersWithMixedFactors = () => {
  const actual = PrimeFactor.of(6).execute();
  const expected = [2, 3];
  expect(actual).toEqual(expected);
};
tests.push(numbersWithMixedFactors);

const bigNumberTest = () => {
  const numberToFactorize = 2 * 2 * 3 * 3 * 11 * 11;
  const actual = PrimeFactor.of(numberToFactorize).execute();
  const expected = [2, 2, 3, 3, 11, 11];
  expect(actual).toEqual(expected);
};
tests.push(bigNumberTest);

const aLessThanOneIsNotFactorizable = () => {
  const shouldThrow = () => PrimeFactor.of(0).execute();
  expect(shouldThrow).toThrow(PrimeFactor.INVALID_NUMBER);
};
tests.push(aLessThanOneIsNotFactorizable);

tests.forEach(aTest => {
  try {
    aTest();
    app.innerHTML += `<p style="color: green">${aTest.name} pass</p>`;
  } catch (err) {
    app.innerHTML += `<p style="color: red">${aTest.name} not pass ${err}</p>`;
  }
});
