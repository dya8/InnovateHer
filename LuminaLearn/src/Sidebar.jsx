import React, { useState } from 'react';
import { FaHome, FaBook, FaEnvelope, FaCog, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './dash.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();  // Use the navigate function from react-router-dom

  const handleNavigation = (section) => {
    // Set active section and navigate to the corresponding route
    if (section === 'Dashboard') {
      navigate('/dashboard');
    } else if (section === 'Quiz') {
      navigate('/Game');
    } /*else if (section === 'Chats') {
      navigate('/chats');
      
    } else if (section === 'Settings') {
      navigate('/settings');
    }*/
  };

  return (
    <div className="dashboard-container">
      {/* Burger icon for toggling the sidebar */}
      <div className="burger-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Academy</h2>
        <ul>
          <li onClick={() => handleNavigation('Dashboard')}><FaHome /> Dashboard</li>
          <li onClick={() => handleNavigation('Quiz')}><FaBook /> Quiz</li>
          <li onClick={() => handleNavigation('Chats')}><FaEnvelope /> Chats</li>
          <li onClick={() => handleNavigation('Settings')}><FaCog /> Settings</li>
        </ul>
      </div>

      {/* Content area */}
      <div className="content">
        {/* Content will be handled based on routes */}
      </div>
    </div>
  );
};

export default Sidebar;
