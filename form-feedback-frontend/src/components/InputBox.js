import React from "react";

const InputBox = ({ title, options, name, onChange, errorText }) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{title}</label>
        <select name={name} id={name} onChange={onChange}>
          <option value="please Select">Please select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="error-msg">{errorText}</div>
    </>
  );
};

export default InputBox;
//  <option key={index} value={option}>
