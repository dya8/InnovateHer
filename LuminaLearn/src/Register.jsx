
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import registerImage from './assets/loginImage.png';

function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
        contact: parseInt(contact, 10), // Ensure contact is sent as an integer
        age: parseInt(age, 10), 
        name ,       // Ensure age is sent as an integer
        city,
        state,
        profession,
      });
      if (response.data.success) {
        alert('Registration successful');
        navigate('/dashboard');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response error:', error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request error:', error.request);
        alert('No response received from server. Please check your network connection and try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Axios error:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-image">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="register-form">
        <h1>Register to LuminaLearn</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
