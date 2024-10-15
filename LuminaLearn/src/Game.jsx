import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css';

const Game = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
   
    <div className="game-container">
    <div className="Home" >
      <div className="icon">🏠</div>
    </div>
      <h2 className="title">Choose Your Mode</h2>
      <div className="modes-grid">
        <div className="mode-card challenge" onClick={() => handleNavigation('/PopQuiz/urban-policies')}>
        <div className="icon">🎮</div>
        <h3> Urban Policies </h3>
          <p>Play single</p>
        </div>
        <div className="mode-card tournament" onClick={() => handleNavigation('/PopQuiz/cyber-security')}>
        <div className="icon">👥</div>
          <h3>Cyber Security</h3>
          <p>Play with strangers</p>
        </div>
        <div className="mode-card duel" onClick={() => handleNavigation('/PopQuiz/agriculture')}>
        <div className="icon">🎬</div>

          <h3>Agriculture</h3>
          <p>Play with friends</p>

        </div>
        <div className="mode-card lucky" onClick={() => handleNavigation('/PopQuiz/business')}>
        <div className="icon">🧠</div>
         <h3> Business</h3>
         <p>Play single and learn</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Game;

