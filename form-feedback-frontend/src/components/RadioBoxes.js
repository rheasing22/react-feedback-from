import React from "react";

const RadioBoxes = ({ title, name, onChange, errorText, value }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <div name={name}>
        {arr.map((_, index) => (
          <span key={index}>
            <input
              aria-describedby={name}
              type="radio"
              name={name}
              id={`${name}${index}`}
              value={index + 1}
              checked={+value === index + 1}
              onChange={onChange}
            />
            <label htmlFor={`${name}${index}`}>{index + 1}</label>
          </span>
        ))}
      </div>
      <div className="error-msg">{errorText}</div>
    </div>
  );
};

export default RadioBoxes;
