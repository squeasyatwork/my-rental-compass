import React from 'react';

function LikertScale({ name, selectedChoice, handleChoice }) {

  const choices = ["1", "2", "3", "4", "5"]; // You can add more choices if needed
  
  return (
    <div className="likert-options flex justify-center text-lg font-normal">
      {choices.map((choice) => (
        <label key={choice} className={`likert-label ${selectedChoice === choice ? 'selected' : ''}`}>
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