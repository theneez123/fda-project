import React from 'react';
import './Usercardcss.css';
import userpic from '../../assets/user.png';

function Usercard({ username, userid, email, role, onEdit }) {
  return (
    <div className="container">
      <div className="Userpic">
        <img src={userpic} alt="User" />
      </div>

      <div className="UserInfo">
        <p>Username: {username}</p>
        <p>UserID: {userid}</p>
        <p>Email: {email}</p>
        <p>RoleID: {role}</p>
        <button onClick={onEdit} className="edit-button">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Usercard;
