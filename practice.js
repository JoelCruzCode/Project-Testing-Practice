function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1);
  const result = firstLetter.concat(rest);
  return result;
}

function reverseString(string) {
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

function calculator() {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }

  return { add, subtract, divide, multiply };
}

function caesarCipher(string, shiftNum) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cipher = "";

  for (let letter of string) {
    if (alphabet.includes(letter.toLowerCase())) {
      let capitalized = letter === letter.toUpperCase() ? true : false;
      let index = (alphabet.indexOf(letter.toLowerCase()) + shiftNum) % 26;
      let shifted = alphabet[index];

      if (capitalized) {
        cipher += shifted.toUpperCase();
      } else {
        cipher += shifted;
      }
    } else {
      cipher += letter;
    }
  }
  return cipher;
}

function analyzeArray(array) {
  const length = array.length;

  if (length === 0) {
    console.log("Array is empty");
    return;
  }
  let total = 0;
  let min = array[0];
  let max = array[0];
  let average;

  for (let num of array) {
    total += num;
    min = num < min ? num : min;
    max = num > max ? num : max;
  }
  average = total / length;

  return { average, min, max, length };
}

analyzeArray([1, 8, 3, 4, 2, 6]);

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
