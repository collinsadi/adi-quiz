import React from "react";
import Options from "./Options";

const Question = ({ question, selectedAnswer, onAnswerSelect }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{question.questionText}</h3>
      <Options
        options={question.options}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
      />
    </div>
  );
};

export default Question;
