import React from "react";

function LikertScale({ name, selectedChoice, handleChoice }) {
  const choices = ["1", "2", "3", "4", "5"];

  return (
    <div className="likert-options flex justify-between text-lg font-normal pt-4 pb-4">
      {choices.map((choice) => (
        <label
          key={choice}
          className={`likert-label ${selectedChoice === choice ? "selected" : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={choice}
            checked={selectedChoice === choice}
            onChange={handleChoice}
            className="likert-radio"
          />
          {choice}
        </label>
      ))}
    </div>
  );
}

export default LikertScale;
