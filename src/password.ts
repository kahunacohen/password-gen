import { specialChars } from "@testing-library/user-event";
import { PasswordParameters } from "./types";

export const LOWERCASE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const UPPERCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const SPECIAL_CHARACTERS = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  ">",
  "<",
  "?",
];

function getRandomNum(max: number): number {
  return Math.floor(Math.random() * max);
}
export function generatePassword(input: PasswordParameters): string {
  /**
   * Determine number of each type of character by dividing
   * the length by number of types. So if we choose a password of
   * 8 chars, chosing uppercase and numbers. We would have a length
   * 8 password with 4 random uppercase numbers and 4 random lower case numbers.
   */
  let retArr = Array(input.length).fill(-1);
  let numTypes = 0;
  if (input.useLowercase) {
    numTypes += 1;
  }
  if (input.useNumbers) {
    numTypes += 1;
  }
  if (input.useSpecialCharacters) {
    numTypes += 1;
  }
  if (input.useUppercase) {
    numTypes += 1;
  }
  // This is the number of chars for each type (e.g. lower case, upper case etc.).
  // This must be a whole number. If there's a remainder, it will be added from special
  // characters to the string.
  const numCharsPerType = Math.floor(input.length / numTypes);
  const remainder = input.length % numTypes;
  // For each type, randomly choose appropriate number
  if (input.useLowercase) {
    for (let i = 0; i < numCharsPerType; i++) {
      let randIndx = getRandomNum(input.length);
      // As long as there is a value at this index, try a new index.
      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] = LOWERCASE_LETTERS[randIndx];
    }
  }
  if (input.useUppercase) {
    for (let i = 0; i < numCharsPerType; i++) {
      let randIndx = getRandomNum(input.length);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] =
        UPPERCASE_LETTERS[getRandomNum(UPPERCASE_LETTERS.length)];
    }
  }
  if (input.useNumbers) {
    for (let i = 0; i < numCharsPerType; i++) {
      let randIndx = getRandomNum(input.length - 1);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length - 1);
      }
      retArr[randIndx] = NUMBERS[getRandomNum(NUMBERS.length)];
    }
  }
  if (input.useSpecialCharacters) {
    for (let i = 0; i < numCharsPerType; i++) {
      let randIndx = getRandomNum(input.length);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] =
        SPECIAL_CHARACTERS[getRandomNum(SPECIAL_CHARACTERS.length)];
    }
  }
  // If there's a remainder (the length doesn't divide evenly by type of chars, then replace
  // any remaining -1 elements with special characters. Dynamically handle which type to take from
  // in case special characters is not chosen.
  if (remainder > 0) {
    retArr = retArr.map((x) =>
      x === -1 ? SPECIAL_CHARACTERS[getRandomNum(SPECIAL_CHARACTERS.length)] : x
    );
  }
  return retArr.join("");
}
export function getPasswordStrength(password: string): boolean {
  return password.length > 8;
}
