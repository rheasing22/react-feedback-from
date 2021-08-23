import React from "react";

const EmailComponent = ({
  title,
  placeholder,
  name,
  onChange,
  value,
  errorText,
}) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{title}</label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </div>
      <div className="error-msg">{errorText}</div>
    </>
  );
};

export default EmailComponent;
