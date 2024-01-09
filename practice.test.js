import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("hello capitalized is Hello", () => {
  const result = capitalize("hello");
  expect(result).toEqual("Hello");
});

test("String is backwards", () => {
  const result = reverseString("hello");
  expect(result).toEqual("olleh");
});

const calc = calculator();

test("2 + 3 = 5", () => {
  const result = calc.add(2, 3);
  expect(result).toEqual(5);
});

test("2 minus 3 is equal to -1", () => {
  const result = calc.subtract(2, 3);
  expect(result).toEqual(-1);
});

test("2 divided by 3", () => {
  const result = calc.divide(2, 3);
  expect(result).toBeCloseTo(0.6666);
});

test("2 multiplied by 3 is equal to 6", () => {
  const result = calc.multiply(2, 3);
  expect(result).toEqual(6);
});

test("Wrapping with 28 to equal jgnnq", () => {
  const cipher = caesarCipher("hello", 28);
  expect(cipher).toBe("jgnnq");
});

test("Testing output for correct letter casing - JgnNQ", () => {
  const cipher = caesarCipher("HelLO", 28);
  expect(cipher).toBe("JgnNQ");
});

test("Testing punctuation, non-alphabetic letters should remain the same", () => {
  const cipher = caesarCipher("a1b!c,d]e$", 1);
  expect(cipher).toBe("b1c!d,e]f$");
});

test("Object.average is equal to 4", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toEqual(4);
});

test("All object properties should be equal to the comparison object", () => {
  const comparisonObject = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual(comparisonObject);
});

test("array with non-numeric", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, "6"]);
  expect(object).toEqual("Array is non-numeric");
});

test("not an array", () => {
  const object = analyzeArray("183426");
  expect(object).toEqual("Not an array");
});
