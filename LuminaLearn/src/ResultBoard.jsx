import React from 'react';
import './Resultboard.css';

const ResultBoard = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  let feedbackMessage = '';
  if (percentage === 100) {
    feedbackMessage = "Perfect! You're a quiz master!";
  } else if (percentage >= 75) {
    feedbackMessage = 'Great job! Almost perfect.';
  } else if (percentage >= 50) {
    feedbackMessage = 'Good effort! Keep practicing.';
  } else {
    feedbackMessage = 'Better luck next time! Keep learning.';
  }

  return (
    <div className="result-board-container">
       <div className="Home" >
      <div className="icon">🏠</div>
    </div>
      <div className="result-card">
        <h2>Quiz Finished!</h2>
        <h3>Your Score</h3>
        <p>{score} / {totalQuestions}</p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <p className="feedback">{feedbackMessage}</p>
        <button className="retry-btn" onClick={() => window.location.reload()}>Retry</button>
      </div>
    </div>
  );
};

export default ResultBoard;
