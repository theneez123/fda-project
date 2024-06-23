import React, { useState, useEffect } from 'react';
import './TopNavcss.css';
import profile from "../../assets/user.png"


function TopNav(){
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role) {
          setUserRole(role);
        }
      }, []);

    return (
        <div className="TopNav">
            <div className="Logo">FDA Asset Tracking System</div>
            <div className='profile'><img src={profile} alt="profile" /> <h3>{userRole}</h3></div>
        </div>
    );
}

export default TopNav;