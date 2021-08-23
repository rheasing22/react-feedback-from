import React from "react";
import MultiInputs from "./MultiInputs";
import EmailComponent from "./EmailComponent";

function Contact({ onChange, formState, errorState }) {
  const { First_Name, Last_Name, Email, Area_Code, Phone_Number } = formState;
  const {
    First_NameError,
    Last_NameError,
    EmailError,
    Area_CodeError,
    Phone_NumberError,
  } = errorState;
  return (
    <div>
      <MultiInputs
        title={"Your Name"}
        name={"personal_name"}
        options={["First_Name", "Last_Name"]}
        type={"text"}
        onChange={onChange}
        value1={First_Name}
        value2={Last_Name}
        errorText1={First_NameError}
        errorText2={Last_NameError}
      />
      <EmailComponent
        title={"E-mail"}
        name={"Email"}
        placeholder={"ex: myname@example.com"}
        onChange={onChange}
        value={Email}
        errorText={EmailError}
      />
      <MultiInputs
        title={"Phone Number"}
        name={"personal_name"}
        options={["Area_Code", "Phone_Number"]}
        type={"number"}
        onChange={onChange}
        value1={Area_Code}
        value2={Phone_Number}
        errorText1={Area_CodeError}
        errorText2={Phone_NumberError}
      />
    </div>
  );
}

export default Contact;
