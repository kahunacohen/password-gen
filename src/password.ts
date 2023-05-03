import { GeneratorInput } from "./types";


const lowerCaseLetters = [
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
  const upperCaseLetters = [
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
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCharacters = [
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
export function generatePassword(input: GeneratorInput): string {
  /**
   * Determine number of each type of character by dividing
   * the length by number of types. So if we choose a password of
   * 8 chars, chosing uppercase and numbers. We would have a length
   * 8 password with 4 random uppercase numbers and 4 random lower case numbers.
   */
  let retArr = Array(input.length).fill(-1);
  let ret = "";
  let numTypes = 0;
  if (input.lowercase) {
    numTypes += 1;
  }
  if (input.numbers) {
    numTypes += 1;
  }
  if (input.specialCharacters) {
    numTypes += 1;
  }
  if (input.uppercase) {
    numTypes += 1;
  }
  const numEachType = input.length / numTypes;
  // For each type, randomly choose appropriate number
  if (input.lowercase) {
    for (let i = 0; i < numEachType; i++) {
      let randIndx = getRandomNum(input.length);
      // As long as there is a value at this index, try a new index.
      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] = lowerCaseLetters[randIndx];
      ret += lowerCaseLetters[getRandomNum(lowerCaseLetters.length)];
    }
  }
  if (input.uppercase) {
    for (let i = 0; i < numEachType; i++) {
      let randIndx = getRandomNum(input.length);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] =
        upperCaseLetters[getRandomNum(upperCaseLetters.length)];
      ret += upperCaseLetters[getRandomNum(upperCaseLetters.length)];
    }
  }
  if (input.numbers) {
    for (let i = 0; i < numEachType; i++) {
      let randIndx = getRandomNum(input.length - 1);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length - 1);
      }
      retArr[randIndx] = numbers[getRandomNum(numbers.length)];
      ret += numbers[getRandomNum(numbers.length)];
    }
  }
  if (input.specialCharacters) {
    for (let i = 0; i < numEachType; i++) {
      let randIndx = getRandomNum(input.length);

      while (retArr[randIndx] !== -1) {
        randIndx = getRandomNum(input.length);
      }
      retArr[randIndx] =
        specialCharacters[getRandomNum(specialCharacters.length)];
      ret += specialCharacters[getRandomNum(specialCharacters.length)];
    }
  }
  return retArr.join("");
}
export function getPasswordStrength(password: string): boolean {
  return password.length > 8;
}