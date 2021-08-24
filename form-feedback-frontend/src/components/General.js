import React from "react";
import InputBox from "./InputBox";
import RadioBoxes from "./RadioBoxes";
import RadioVertical from "./RadioVertical";

const General = ({ onChange, errorState, formState }) => {
  const { attendError, entertainingError, moneyError, best_partError } =
    errorState;
  const { attend, entertaining, money, best_part } = formState;
  return (
    <div className="general-div">
      <InputBox
        title={"Which event did you attend?"}
        options={["Please select", "option1", "option2", "option3", "option4"]}
        name="attend"
        onChange={onChange}
        errorText={attendError}
        value={attend}
      />
      <RadioBoxes
        title={"Overall, how entertaining was the event? "}
        name={"entertaining"}
        options={["None", "Fired Up"]}
        onChange={onChange}
        errorText={entertainingError}
        value={entertaining}
      />

      <RadioBoxes
        title={"Do you feel the day provided value for money? "}
        name={"money"}
        options={["Not at all", "Definitely"]}
        onChange={onChange}
        errorText={moneyError}
        value={money}
      />

      <RadioVertical
        name={"best_part"}
        title={"What was the single best part of the event?"}
        options={["option1", "option2", "option3", "option4"]}
        onChange={onChange}
        errorText={best_partError}
        value={best_part}
      />
    </div>
  );
};

export default General;
