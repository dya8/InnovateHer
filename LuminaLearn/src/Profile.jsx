/** 
// src/Profile.js
import React from 'react';
import './Profile.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user,setUser]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(response => setUser(response.data)) // Use response instead of users
      .catch(err => console.log(err));
  }, []);
  console.log(user[0].username);
 
 return (
<div className="together">


    
    <div className="profile-container">
      <header className="header">
        <h1>LuminaLearn account</h1>
        <button className="sign-out">Sign out</button>
      </header>
     
      
      <section className="personal-info">
      <section className="user-sideInfo">
      <div className="avatar">
          <div className="avatar-icon">&#128100;</div>
          <p>{user[0].username}</p>
        </div>
      </section>
       
        <div className="info-section">
          <div className="info-item">
            <h3>Name</h3>
            <p>{user[0].name}</p>
          </div>
          <div className="info-item">
            <h3>Age</h3>
            <p>{user[0].age}</p>
          </div>
          <div className="info-item">
            <h3>City</h3>
            <p>{user[0].city}</p>
          </div>
          <div className="info-item">
            <h3>State</h3>
            <p>{user[0].state}</p>
          </div>
          <div className="info-item">
            <h3>Contact</h3>
            <p>{user[0].contact}</p>
          </div>
          <div className="info-item">
            <h3>Job</h3>
            <p>{user[0].profession}</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Profile;
**/
import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(response => {
        setUser(response.data[0]); // Assuming you want the first user for the profile
      })
      .catch(err => console.log(err));
  }, []);

  const handleSignOut = () => {
    // Clear any authentication tokens or user info
    // navigate to the sign-in page or home page
    navigate('/signin'); // Adjust the path as necessary
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="together">
      <div className="profile-container">
        <header className="header">
          <h1>LuminaLearn Account</h1>
          <button className="sign-out" onClick={handleSignOut}>Sign out</button>
        </header>
        
        <section className="personal-info">
          <section className="user-sideInfo">
            <div className="avatar">
              <div className="avatar-icon">&#128100;</div>
              <p>{user.username}</p>
            </div>
          </section>
          
          <div className="info-section">
            <div className="info-item">
              <h3>Name</h3>
              <p>{user.name}</p>
            </div>
            <div className="info-item">
              <h3>Age</h3>
              <p>{user.age}</p>
            </div>
            <div className="info-item">
              <h3>City</h3>
              <p>{user.city}</p>
            </div>
            <div className="info-item">
              <h3>State</h3>
              <p>{user.state}</p>
            </div>
            <div className="info-item">
              <h3>Contact</h3>
              <p>{user.contact}</p>
            </div>
            <div className="info-item">
              <h3>Job</h3>
              <p>{user.profession}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
