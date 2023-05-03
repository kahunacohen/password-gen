import React, { useEffect, useState } from "react";

function getRandomNum(max: number): number {
  return Math.floor(Math.random() * max);
}
function generatePassword(input: GeneratorInput): string {
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
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    ];
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
function getPasswordStrength(password: string): string {
  return "Strong";
}

interface GeneratorInput {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
}
export function Output(props: GeneratorInput) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword(props));
  }, []);
  const passwordStrength = getPasswordStrength(password);
  return (
    <div className="Output">
      <div className="input-row">
        <div className="input-wrapper">
          <input value={password} type="text"></input>
          <svg
            className="refresh"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 28.4375C8.49998 28.4375 3.22498 23.15 3.22498 16.6625C3.22498 10.175 8.49998 4.875 15 4.875C16.3375 4.875 17.6375 5.0625 18.8875 5.45C19.3875 5.6 19.6625 6.125 19.5125 6.625C19.3625 7.125 18.8375 7.4 18.3375 7.25C17.275 6.925 16.15 6.75 15 6.75C9.53748 6.75 5.09998 11.1875 5.09998 16.65C5.09998 22.1125 9.53748 26.55 15 26.55C20.4625 26.55 24.9 22.1125 24.9 16.65C24.9 14.675 24.325 12.775 23.2375 11.15C22.95 10.725 23.0625 10.1375 23.5 9.85C23.925 9.5625 24.5125 9.675 24.8 10.1125C26.1 12.05 26.7875 14.3125 26.7875 16.6625C26.775 23.15 21.5 28.4375 15 28.4375Z"
              fill="black"
            ></path>
            <path
              d="M20.1625 7.5875C19.9 7.5875 19.6375 7.475 19.45 7.2625L15.8375 3.1125C15.5 2.725 15.5375 2.125 15.925 1.7875C16.3125 1.45 16.9125 1.4875 17.25 1.875L20.8625 6.025C21.2 6.4125 21.1625 7.0125 20.775 7.35C20.6125 7.5125 20.3875 7.5875 20.1625 7.5875Z"
              fill="black"
            ></path>
            <path
              d="M15.95 10.6625C15.6625 10.6625 15.375 10.525 15.1875 10.275C14.8875 9.86251 14.975 9.27501 15.3875 8.96251L19.6 5.88751C20.0125 5.57501 20.6 5.67501 20.9125 6.08751C21.225 6.50001 21.125 7.08751 20.7125 7.40001L16.5 10.4875C16.3375 10.6125 16.15 10.6625 15.95 10.6625Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <button className="copy-btn">Copy</button>
      </div>
      <div className={"strength " + passwordStrength}>{passwordStrength}</div>
      <div className="length">Password length: 0</div>
    </div>
  );
}
