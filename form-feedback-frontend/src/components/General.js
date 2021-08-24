import React from "react";
import InputBox from "./InputBox";
import RadioBoxes from "./RadioBoxes";
import RadioVertical from "./RadioVertical";

const General = ({ onChange, errorState }) => {
  const { attendError, entertainingError, moneyError, best_partError } =
    errorState;

  return (
    <div className="general-div">
      <InputBox
        title={"Which event did you attend?"}
        options={["option1", "option2", "option3", "option4"]}
        name="attend"
        onChange={onChange}
        errorText={attendError}
      />
      <RadioBoxes
        title={"Overall, how entertaining was the event? "}
        name={"entertaining"}
        options={["None", "Fired Up"]}
        onChange={onChange}
        errorText={entertainingError}
      />

      <RadioBoxes
        title={"Do you feel the day provided value for money? "}
        name={"money"}
        options={["Not at all", "Definitely"]}
        onChange={onChange}
        errorText={moneyError}
      />

      <RadioVertical
        name={"best_part"}
        title={"What was the single best part of the event?"}
        options={["option1", "option2", "option3", "option4"]}
        onChange={onChange}
        errorText={best_partError}
      />
    </div>
  );
};

export default General;
