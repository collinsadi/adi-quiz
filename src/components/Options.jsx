import React from "react";

const Options = ({ options, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => onAnswerSelect(option)}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Options;
