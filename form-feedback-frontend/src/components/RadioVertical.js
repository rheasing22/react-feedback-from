import React from "react";

const RadioVertical = ({
  name,
  title,
  options,
  onChange,
  errorText,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <div>
        <div name={name}>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name={name}
                value={option}
                onChange={onChange}
                checked={value === option}
              />
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
