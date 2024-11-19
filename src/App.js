import "./styles.css";

import React, { useState } from "react";
import "./styles.css";

const questions = [
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["5", "6", "8", "9"],
    answer: "8",
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: ["Tuple", "List", "String", "Set"],
    answer: "List",
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".pyth", ".pt", ".py", ".python"],
    answer: ".py",
  },
  {
    question: "How do you start a for loop in Python?",
    options: [
      "for i to range(5):",
      "for i in range(5):",
      "for i = range(5):",
      "for (i=0; i<5; i++):",
    ],
    answer: "for i in range(5):",
  },
  {
    question: "Which of the following is not a Python keyword?",
    options: ["finally", "nonlocal", "goto", "lambda"],
    answer: "goto",
  },
  // Add more questions up to 30 as needed
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  return (
    <div className="quiz-game">
      <h1>Python MCQ Game 🐍</h1>
      {showResult ? (
        <div className="result">
          <h2>Game Over!</h2>
          <p>
            You scored {score} out of {questions.length}.
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={selectedOption === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}
