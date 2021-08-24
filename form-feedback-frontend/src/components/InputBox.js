import React from "react";

const InputBox = ({ title, options, name, onChange, errorText, value }) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{title}</label>
        <select name={name} id={name} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option} name={name}>
              {option}
            </option>
          ))}
        </select>
        <div className="error-msg">{errorText}</div>
      </div>
    </>
  );
};

export default InputBox;
//  <option key={index} value={option}>
