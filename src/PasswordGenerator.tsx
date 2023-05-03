import React, { useState } from "react";
import { Output } from "./Output";
import "./PasswordGenerator.css";
import { Input } from "./Input";

export function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(6);
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
          uppercase={true}
          lowercase={true}
          numbers={true}
          specialCharacters={true}
        />
        <Input setPasswordLength={setPasswordLength} length={passwordLength} />
      </div>
    </div>
  );
}
