import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import './App.css';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
     
    </Router>
  );
}

export default App;
