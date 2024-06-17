import React, { useState } from 'react';
import './SideNavcss.css';
import fdalogo from '../../assets/fdalogo.png';

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="burger-menu" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`SideNav ${isOpen ? 'open' : ''}`}>
        <img src={fdalogo} alt="FDA Logo" />
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Departments</a></li>
          <li className='active'><a href="#">Total Assets</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">System Logs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
