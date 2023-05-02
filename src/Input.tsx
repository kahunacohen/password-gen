export function Input(props: any) {
  return (
    <div className="Input">
      <label className="length-label" htmlFor="length-input">
        Length
      </label>
      <input id="length-input" type="number" max="16"></input>
      <div className="checkboxes-ct">
        <div className="checkbox-ct">
          <label>Uppercase</label>
          <input type="checkbox"></input>
        </div>
        <div className="checkbox-ct">
          <label>Lowercase</label>
          <input type="checkbox"></input>
        </div>
        <div className="checkbox-ct">
          <label>Numbers</label>
          <input type="checkbox"></input>
        </div>
        <div className="checkbox-ct">
          <label>Special Characters</label>
          <input type="checkbox"></input>
        </div>
      </div>
    </div>
  );
}