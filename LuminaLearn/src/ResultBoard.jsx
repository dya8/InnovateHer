// src/components/ResultBoard.js
import React from 'react';

const ResultBoard = ({ results }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Questions Attempted: {results.attempted}</p>
      <p>Questions Answered Correctly: {results.answered.filter(a => a.isCorrect).length}</p>
      <p>Points Earned: {results.score}</p>
      <h3>Detailed Results:</h3>
      <ul>
        {results.answered.map((result, index) => (
          <li key={index}>
            <p>Question: {result.question}</p>
            <p>Your Answer: {result.selectedOption}</p>
            <p>Correct: {result.isCorrect ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultBoard;