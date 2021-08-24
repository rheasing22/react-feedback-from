import React, { useState } from "react";
import General from "./components/General.js";
import Contact from "./components/Contact.js";
import axios from "axios";
import "./App.css";

function App() {
  const intialErrorState = {
    attendError: "",
    entertainingError: "",
    moneyError: "",
    best_partError: "",
    First_NameError: "",
    Last_NameError: "",
    EmailError: "",
    Area_CodeError: "",
    Phone_NumberError: "",
  };

  const intialFormState = {
    attend: "",
    entertaining: 0,
    money: 0,
    best_part: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    Area_Code: "",
    Phone_Number: "",
  };
  const [formState, setFormState] = useState(intialFormState);

  const [errorState, setError] = useState(intialErrorState);

  const validate = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isError = false;
    let errors = intialErrorState;

    if (formState.attend === "" || formState.attend === "please Select") {
      isError = true;
      errors.attendError = "Required";
    }

    if (formState.entertaining === 0) {
      isError = true;
      errors.entertainingError = "Required";
    }

    if (formState.money === 0) {
      isError = true;
      errors.moneyError = "Required";
    }

    if (formState.best_part === "") {
      isError = true;
      errors.best_partError = "Required";
    }

    if (formState.First_Name === "") {
      isError = true;
      errors.First_NameError = "Required";
    }

    if (formState.Last_Name === "") {
      isError = true;

      errors.Last_NameError = "Required";
    }

    if (formState.Email === "") {
      isError = true;
      errors.EmailError = "Required";
    }

    if (formState.Area_Code === "") {
      isError = true;

      errors.Area_CodeError = "Required";
    }

    if (formState.Phone_Number === "") {
      isError = true;

      errors.Phone_NumberError = "Required";
    }

    if (formState.Email && !formState.Email.match(validRegex)) {
      isError = true;
      errors.EmailError = "Email is not in correct format";
    }

    if (formState.Area_Code && formState.Area_Code.length !== 3) {
      isError = true;
      errors.Area_CodeError = "Area code not 3 digits";
    }

    if (formState.Phone_Number && formState.Phone_Number.length !== 7) {
      isError = true;
      errors.Phone_NumberError = "Phone code not in 7 digits";
    }

    setError({
      ...errors,
    });

    return isError;
  };

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const isError = validate();
      if (!isError) {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const res = await axios.post("/form", formState, config);
        setmsg("submitted");
        console.log(res.data);
        //setFormState(intialFormState);
        setError(intialErrorState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Event Feedback</h1>
          <div>You can write anything in here about the event</div>
        </div>

        <form onSubmit={onSubmit}>
          <General onChange={onChange} errorState={errorState} />
          <Contact
            onChange={onChange}
            formState={formState}
            errorState={errorState}
          />

          <div className="submit-button">
            <button type="submit">Submit Form</button>
          </div>

          <div className="submit-message">{msg}</div>
        </form>
      </div>
    </>
  );
}

export default App;
