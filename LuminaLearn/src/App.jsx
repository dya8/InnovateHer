/*import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import QuizIntro from './QuizIntro';
import QuizApp from './QuizApp';
import './App.css';
import "./Parallax";
import { Parallax } from 'react-parallax'; // or the correct path/module for Parallax


function App() {
 /**return (
    <Router>
     
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/quiz" element={<QuizApp/>} />
        </Routes>
     
    </Router>
  );
  **/
  /*return (
    <Router>
     
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Login/>} />
         <Route path="/main"element={<Parallax/>}/>
         <Route path="/home" element={<Home/>} />
        </Routes>
     
    </Router>
  );

  /*return(
    <>
<QuizIntro/>
</>
*
  );*/
//}
/**
export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import './App.css';
import LandingPage from './LandingPage';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './dash.css';
import PopQuiz from './PopQuiz';
import Game from './Game';

function App() {
  return (
   /* <Router>
      <Routes>
      {/*  <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<CustomParallax />} /> {/* Use CustomParallax here */
       /* <Route path="/home" element={<Home />} />
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/library" element={<Library />}/>
         <Route path="/quiz" element={<QuizApp />} />
         <Route path="/Into" element={<QuizIntro />}/>*/
       /* <Route path="/" element={<MainDash/>}/>
         
      </Routes>
    </Router>*/
   /* <Router>
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        
      </div>
    </div>
  </Router>

*/
  <>
    <Sidebar/>
  <Router>
    <Routes>
      {/* Route for the game mode selection */}
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/Game" element={<Game />} />
      
      {/* Route for each quiz category */}
      <Route path="/PopQuiz/urban-policies" element={<PopQuiz category="Urban Policies" />} />
      <Route path="/PopQuiz/cyber-security" element={<PopQuiz category="Cyber Security" />} />
      <Route path="/PopQuiz/agriculture" element={<PopQuiz category="Agriculture" />} />
      <Route path="/PopQuiz/business" element={<PopQuiz category="Business" />} />
    </Routes>
  </Router>
  </>
);

}

export default App;
