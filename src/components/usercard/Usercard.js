import React from 'react';
import './Usercardcss.css';
import userpic from '../../assets/user.png';

function Usercard({ email, userid, role, onEdit }) {
  return (
    <div className="container">
      <div className="Userpic">
        <img src={userpic} alt="User" />
      </div>

      <div className="UserInfo">
        <p>Email: {email}</p>
        <p>User ID: {userid}</p>
        <p>Role: {role}</p>
        <button onClick={onEdit} className="edit-button">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Usercard;
