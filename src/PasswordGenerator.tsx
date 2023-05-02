import React from "react";

import "./PasswordGenerator.css";

export function PasswordGenerator() {
  return (
    <div className="password-generator-wrapper">
      {/* Header component */}
      <div className="header">
        <img className="logo" alt="lock" src="./lock-image.gif" />
        <p className="title">Password Generator</p>
        <p className="description">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>

      {/* Indicator component */}
      <div className="indicator">
        <input type="text" ></input>
      </div>
    </div>
  );
}
