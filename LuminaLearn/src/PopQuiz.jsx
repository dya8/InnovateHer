import React, { useState } from 'react';
import quizData from './quizdata';
//import quizData from './quiz.js';

import './QuizComponent.css';
import ResultBoard from './ResultBoard';

const PopQuiz = ({ category }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const questions = quizData[category];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is over, show results
      setIsQuizOver(true);
    }
  };

  if (isQuizOver) {
    return <ResultBoard score={score} totalQuestions={totalQuestions} />;
  }

  return (
    <div className="quiz-container">

      {/* Progress Bar */}
      <div className="progress-bar">
        <span>Question {currentQuestionIndex + 1} / {totalQuestions}</span>
      </div>
      <div className="Home" >
      <div className="icon">🏠</div>
    </div>
      {/* Question Card */}
      <div className="question-card">
        <h3>{currentQuestion.question}</h3>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button className="next-btn" onClick={handleNextQuestion} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
};

export default PopQuiz;
