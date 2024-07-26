import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import QuizIntro from './QuizIntro';
import QuizApp from './QuizApp';
import './App.css';

function App() {
 return (
    <Router>
     
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/quiz" element={<QuizApp/>} />
        </Routes>
     
    </Router>
  );
  

  /*return(
    <>
<QuizIntro/>
</>
*
  );*/
}

export default App;
