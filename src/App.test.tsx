import React from "react";
import {
  generatePassword,
  LOWERCASE_LETTERS,
  UPPERCASE_LETTERS,
  NUMBERS,
  SPECIAL_CHARACTERS,
} from "./password";
import App from "./App";

test("generates a password with a length that evenly divides by the type of characters", () => {
  const password = generatePassword({
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialCharacters: true,
    length: 8,
  });
  expect(password.length).toEqual(8);
  let numLowerCase = 0;
  let numUpperCase = 0;
  let numNumbers = 0;
  let numSpecialChars = 0;
  for (const c of password) {
    if (LOWERCASE_LETTERS.includes(c)) {
      numLowerCase += 1;
    }
    if (UPPERCASE_LETTERS.includes(c)) {
      numUpperCase += 1;
    }
    if (NUMBERS.map((n) => n.toString()).includes(c)) {
      numNumbers += 1;
    }
    if (SPECIAL_CHARACTERS.includes(c)) {
      numSpecialChars += 1;
    }
  }
  expect(numLowerCase).toBe(2);
  expect(numUpperCase).toBe(2);
  expect(numNumbers).toBe(2);
  expect(numSpecialChars).toBe(2);
});
test("generates a password with a length that unevenly divides by the type of characters", () => {
  const password = generatePassword({
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialCharacters: true,
    length: 9,
  });
  // expect(password.length).toEqual(8);
  // let numLowerCase = 0;
  // let numUpperCase = 0;
  // let numNumbers = 0;
  // let numSpecialChars = 0;
  // for (const c of password) {
  //   if (LOWERCASE_LETTERS.includes(c)) {
  //     numLowerCase += 1;
  //   }
  //   if (UPPERCASE_LETTERS.includes(c)) {
  //     numUpperCase += 1;
  //   }
  //   if (NUMBERS.map((n) => n.toString()).includes(c)) {
  //     numNumbers += 1;
  //   }
  //   if (SPECIAL_CHARACTERS.includes(c)) {
  //     numSpecialChars += 1;
  //   }
  // }
  // expect(numLowerCase).toBe(2);
  // expect(numUpperCase).toBe(2);
  // expect(numNumbers).toBe(2);
  // expect(numSpecialChars).toBe(2);
});
