import React from "react";

const RadioVertical = ({ name, title, options, onChange, errorText }) => {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <div>
        <div name={name} onChange={onChange}>
          {options.map((option, index) => (
            <div key={index}>
              <input type="radio" name={name} value={option} />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="error-msg">{errorText}</div>
    </div>
  );
};

export default RadioVertical;
