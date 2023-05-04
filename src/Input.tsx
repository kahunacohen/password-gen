export function Input(props: {
  length: number;
  setPasswordLength: Function;
  setUseLowercase: Function;
  setUseUppercase: Function;
  setUseNumbers: Function;
  setUseSpecialCharacters: Function;
}) {
  function handleInputTicks(evt: any) {
    switch (evt.target.dataset.passParams) {
      case "uppercase":
        break;
      case "lowercase":
        break;
      case "numbers":
        break;
      case "specialchars":
        break;
      default:
        console.error("an invalid password input parameter was chosen");
    }
  }
  return (
    <div className="Input">
      <label className="length-label" htmlFor="length-input">
        Length
      </label>
      <input
        onChange={(evt) => props.setPasswordLength(parseInt(evt.target.value))}
        id="length-input"
        type="number"
        max="16"
        defaultValue={props.length}
      ></input>
      <div className="checkboxes-ct" onChange={handleInputTicks}>
        <div className="checkbox-ct">
          <label>Uppercase</label>
          <input
            data-pass-param="uppercase"
            defaultChecked={true}
            type="checkbox"
          ></input>
        </div>
        <div className="checkbox-ct">
          <label>Lowercase</label>
          <input
            data-pass-param="lowercae"
            defaultChecked={true}
            type="checkbox"
          ></input>
        </div>
        <div className="checkbox-ct">
          <label>Numbers</label>
          <input
            data-pass-param="numbers"
            defaultChecked={true}
            type="checkbox"
          ></input>
        </div>
        <div className="checkbox-ct">
          <label>Special Characters</label>
          <input
            data-pass-param="specialchars"
            defaultChecked={true}
            type="checkbox"
          ></input>
        </div>
      </div>
    </div>
  );
}
