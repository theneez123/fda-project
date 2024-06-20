import React from "react";
import "./systemlogcard.css";
import image from "../../assets/user.png";

const Systemlogcard = ({ log }) => {
  const { userID, timestamp } = log;


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

  return (
    <div className="container">
      <div className="first">
        <img src={image} alt="User" />
        <p>User ID: {userID || 'Unknown'}</p>
      </div>

      <div className="bar"></div>

      <div className="second">
        <p>
          Login Date: <br /> <span>{formatDate(timestamp)}</span>
        </p>
        <p>
          Login Time: <br /> <span>{formatTime(timestamp)}</span>
        </p>
      </div>
    </div>
  );
};

export default Systemlogcard;
