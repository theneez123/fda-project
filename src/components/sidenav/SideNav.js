import React, { useState } from 'react';
import './SideNavcss.css';
import fdalogo from '../../assets/fdalogo.png';
import { useNavigate } from 'react-router-dom';

function SideNav() {

  const navigate = useNavigate();

  const moveToUsers = () => {
    navigate("/users");
  }

  const moveToAssets = () => {
    navigate("/assets");
  }

  const moveToOverview = () => {
    navigate("/overview");
  }
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
          <li onClick={moveToOverview}><a>Overview</a></li>
          <li><a>Departments</a></li>
          <li onClick={moveToAssets}><a ClassName="active">Total Assets</a></li>
          <li onClick={moveToUsers}><a>Users</a></li>
          <li><a href="#">System Logs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
