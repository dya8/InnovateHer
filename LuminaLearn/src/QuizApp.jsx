// src/App.js
import React, { useState } from 'react';
import Quiz from './Quiz';
import ResultBoard from './ResultBoard';

const quizData = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is the capital of Germany?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Berlin" },
  // Add more questions as needed
];

function QuizApp() {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleResults = (newResults) => {
    setResults(newResults);
    setShowResults(true);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <>
      {!quizStarted ? (
        <div className="instructions">
          <h1>Welcome to the Quiz!</h1>
          <p>Please read the following instructions before starting the quiz:</p>
          <ul>
            <li>Each correct answer will award you 4 points.</li>
            <li>You cannot go back to the previous question.</li>
            <li>Attempt all questions to see your score at the end.</li>
          </ul>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : showResults ? (
        <ResultBoard results={results} />
      ) : (
        <Quiz quizData={quizData} onResults={handleResults} />
      )}
    </>
  );
}

export default QuizApp;