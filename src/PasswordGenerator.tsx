import React, { useState } from "react";
import { Output } from "./Output";
import "./PasswordGenerator.css";
import { Input } from "./Input";

export function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecialCharacters, setUseSpecialCharacters] = useState(true);

  return (
    <div className="password-generator-wrapper">
      <div className="content">
        <div className="Header">
          <img className="logo" alt="lock" src="./lock-image.gif" />
          <p className="title">Password Generator</p>
          <p className="description">
            Create strong and secure passwords to keep your account safe online.
          </p>
        </div>
        <Output
          length={passwordLength}
          useUppercase={useUppercase}
          useLowercase={useLowercase}
          useNumbers={useNumbers}
          useSpecialCharacters={useSpecialCharacters}
        />
        <Input
          setUseUppercase={setUseUppercase}
          setUseLowercase={setUseLowercase}
          setUseNumbers={setUseNumbers}
          setUseSpecialCharacters={setUseSpecialCharacters}
          setPasswordLength={setPasswordLength}
          length={passwordLength}
        />
      </div>
    </div>
  );
}
