import React, { useState } from 'react';
import './SideNavcss.css';
import fdalogo from '../../assets/fdalogo.png';
import { useNavigate } from 'react-router-dom';

function SideNav({ userRole }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if a link should be displayed based on the user role
  const shouldDisplayLink = (link) => {
    switch(userRole) {
      case 'Admin':
        return true;
      case 'assetManager':
        return ['overview', 'assets', 'logs'].includes(link);
      case 'departmentHead':
        return ['overview', 'departments', 'assets', 'logs'].includes(link);
      case 'itSupport':
        return ['overview', 'assets', 'users', 'logs'].includes(link);
      default:
        return false;
    }
  };

  const moveToUsers = () => {
    navigate("/users");
  };

  const moveToAssets = () => {
    navigate("/assets");
  };

  const moveToOverview = () => {
    navigate("/overview");
  };

  const moveToDepartments = () => {
    navigate("/departments");
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
          {shouldDisplayLink('overview') && <li onClick={moveToOverview}><a>Overview</a></li>}
          {shouldDisplayLink('departments') && <li onClick={moveToDepartments}><a>Departments</a></li>}
          {shouldDisplayLink('assets') && <li onClick={moveToAssets}><a className="active">Total Assets</a></li>}
          {shouldDisplayLink('users') && <li onClick={moveToUsers}><a>Users</a></li>}
          {shouldDisplayLink('logs') && <li><a href="#">System Logs</a></li>}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
