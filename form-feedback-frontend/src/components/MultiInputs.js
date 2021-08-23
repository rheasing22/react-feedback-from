import React from "react";

function MultiInputs(props) {
  const {
    name,
    title,
    options,
    type,
    onChange,
    value1,
    value2,
    errorText1,
    errorText2,
  } = props;
  const [option1, option2] = options;

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <div>
        <input
          className={option1}
          type={type}
          name={option1}
          onChange={onChange}
          value={value1}
        />
        <label htmlFor={option1}>{option1.split("_").join(" ")}</label>
        <div className="error-msg">{errorText1}</div>

        <input
          className={option2}
          type={type}
          name={option2}
          onChange={onChange}
          value={value2}
        />
        <label htmlFor={option2}>{option2.split("_").join(" ")}</label>
        <div className="error-msg">{errorText2}</div>
      </div>
    </div>
  );
}

export default MultiInputs;
