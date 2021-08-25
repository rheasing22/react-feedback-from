import React, { useState } from "react";
import General from "./components/General.js";
import Contact from "./components/Contact.js";
import axios from "axios";
import Modal from "./components/Modal";
import "./App.css";
import "./Modal.css";

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
  const [show, setShow] = useState(false);

  const validate = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isError = false;
    let errors = intialErrorState;

    if (formState.attend === "" || formState.attend === "please Select") {
      isError = true;
      errors.attendError = "Event attended not selected";
    }

    if (formState.entertaining === 0) {
      isError = true;
      errors.entertainingError = "No value selected, select a value from 1-10";
    }

    if (formState.money === 0) {
      isError = true;
      errors.moneyError = "No value selected, select a value from 1-10";
    }

    if (formState.best_part === "") {
      isError = true;
      errors.best_partError = "Best part option not selected";
    }

    if (formState.First_Name === "") {
      isError = true;
      errors.First_NameError = "First Name is not entered";
    }

    if (formState.Last_Name === "") {
      isError = true;

      errors.Last_NameError = "Last Name is not entered";
    }

    if (formState.Email === "") {
      isError = true;
      errors.EmailError = "Email is not entered";
    }

    if (formState.Area_Code === "") {
      isError = true;

      errors.Area_CodeError = "Area code is not entered";
    }

    if (formState.Phone_Number === "") {
      isError = true;

      errors.Phone_NumberError = "Phone number is not entered";
    }

    if (formState.Email && !formState.Email.match(validRegex)) {
      isError = true;
      errors.EmailError =
        "Email is not in correct format , correct format: abc@gmail.com";
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
        setShow(true);
        console.log(res.data);
        setFormState(intialFormState);
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
          <General
            onChange={onChange}
            errorState={errorState}
            formState={formState}
          />
          <Contact
            onChange={onChange}
            formState={formState}
            errorState={errorState}
          />

          <div className="submit-button">
            <button type="submit">Submit Form</button>
          </div>

          <Modal show={show} onClose={() => setShow(false)} />
        </form>
      </div>
    </>
  );
}

export default App;
