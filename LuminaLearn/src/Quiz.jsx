// src/components/Quiz.js
import React, { useState } from 'react';

const Quiz = ({ quizData, onResults }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [answered, setAnswered] = useState([]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore(score + 4);
    }
    setAttempted(attempted + 1);
    setAnswered([...answered, { question: quizData[currentQuestionIndex].question, selectedOption, isCorrect }]);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onResults({ score, attempted, answered });
    }
  };

  return (
    <div>
      <h2>{quizData[currentQuestionIndex].question}</h2>
      <div>
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;