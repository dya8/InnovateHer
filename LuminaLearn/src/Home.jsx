/*import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook here

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(response => setUsers(response.data)) // Use response instead of users
      .catch(err => console.log(err));
  }, []);

  let getclick = () => {
    const result = {}; // Define the result object you want to pass (make sure it's defined and populated)
   // navigate("/quiz", { state: { results: result } });
   navigate("/profile", { state: { results: result } });
  }

  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>WELCOME</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map(user => ( // Use user instead of users here
            <tr key={user.id}> 
              <td>{user.username}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={getclick}>Quiz</button>
    </>
  );
}
 
*/
import React from 'react';
import './MainPage.css';
import heroImage from './assets/loginImage.png'; // Replace with your image path
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const getclick = () => {
    // You can pass state or parameters here if needed
    navigate("/profile"); // Navigate to the profile page
  };
  const getclick1 = () => {
    // You can pass state or parameters here if needed
    navigate("/Into"); // Navigate to the profile page
  };
  const getclick2= () => {
    // You can pass state or parameters here if needed
    navigate("/library"); // Navigate to the profile page
  };

  return (
    <div className="main-page">
      <header className="main-header">
        <div className="logo">LuminaLearn</div>
        <nav className="nav-menu">
          <button className="points">XXX Points</button>
          <button className="profile-button" onClick={getclick}>Your Profile</button>
        </nav>
      </header>

      <section className="hero-section">
        <img src={heroImage} alt="Empowering Women" className="hero-image" />
        <div className="hero-text">
          <h1>Empowering Women Through Digital Literacy</h1>
          <p>Embrace the Future with Confidence!</p>
        </div>
      </section>

      <div className="menu-section">
        <button className="menu-button"onClick={getclick1}>Quiz</button>
        <button className="menu-button"onClick={getclick2}>Library</button>
      </div>
    </div>
  );
};

export default MainPage;
