import axios from "axios";
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
    navigate("/quiz", { state: { results: result } });
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
            <tr key={user.id}> // Add a key prop, assuming users have an id
              <td>{user.username}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={getclick}>Quiz</button>
    </>
  );
}
