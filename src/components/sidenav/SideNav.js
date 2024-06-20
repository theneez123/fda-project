import React, { useState, useEffect } from 'react';
import './SideNavcss.css';
import fdalogo from '../../assets/fdalogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function SideNav() {
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Retrieve user role from localStorage
    const role = localStorage.getItem('role');
    if (role) {
      setUserRole(role);
    }
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const shouldDisplayLink = (link) => {
    switch (userRole) {
      case 'Admin':
        return true;
      case 'Asset Manager':
        return ['overview', 'assets', 'systemlogs'].includes(link);
      case 'Department Head':
        return ['overview', 'departments', 'assets', 'systemlogs'].includes(link);
      case 'IT Support':
        return ['overview', 'assets', 'users', 'systemlogs'].includes(link);
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

  const moveToSystemlogs = () => {
    navigate("/systemlogs");
  };

  const handleLogout = () => {
   
    localStorage.removeItem('role');
 
    navigate("/");
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
          {shouldDisplayLink('overview') && (
            <li className={location.pathname === '/overview' ? 'active' : ''} onClick={moveToOverview}>
              <a>Overview</a>
            </li>
          )}
          {shouldDisplayLink('departments') && (
            <li className={location.pathname === '/departments' ? 'active' : ''} onClick={moveToDepartments}>
              <a>Departments</a>
            </li>
          )}
          {shouldDisplayLink('assets') && (
            <li className={location.pathname === '/assets' ? 'active' : ''} onClick={moveToAssets}>
              <a>Total Assets</a>
            </li>
          )}
          {shouldDisplayLink('users') && (
            <li className={location.pathname === '/users' ? 'active' : ''} onClick={moveToUsers}>
              <a>Users</a>
            </li>
          )}
          {shouldDisplayLink('systemlogs') && (
            <li className={location.pathname === '/systemlogs' ? 'active' : ''} onClick={moveToSystemlogs}>
              <a>System Logs</a>
            </li>
          )}
          <li className="logout" onClick={handleLogout}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
