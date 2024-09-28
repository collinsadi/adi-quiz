import React, { useState } from "react";
import { questionsData } from "../data/questions";
import { calculateScore } from "../utils/quizUtils";
import Question from "./Question";

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Dark Mode Toggle
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAnswerSelect = (answer) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isQuizCompleted) {
    const score = calculateScore(questionsData, userAnswers);
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Quiz Completed!</h2>
          <p className="text-xl mt-4">
            Your final score is {score} out of {questionsData.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-500"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Adi Quiz</h2>
        <h2 className="text-lg mb-2">
          Question {currentQuestionIndex + 1} of {questionsData.length}
        </h2>
        <Question
          question={questionsData[currentQuestionIndex]}
          selectedAnswer={userAnswers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
        <div className="flex justify-between mt-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePrevQuestion}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          >
            {currentQuestionIndex === questionsData.length - 1
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
