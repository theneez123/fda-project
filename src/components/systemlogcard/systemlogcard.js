import React from "react";
import "./systemlogcard.css";
import image from "../../assets/user.png";

const Systemlogcard = ({ log }) => {
  const { userID, department, logID, loginDate, loginTime, activities } = log;

  return (
    <div className="container">
      <div className="first">
        <img src={image} alt="User" />
        <p>User ID: {userID}</p>
        <p>Department: {department}</p>
        <p>Log ID: {logID}</p>
      </div>

      <div className="bar"></div>

      <div className="second">
        <span className="one">
          <p>
            Login Date <br /> <span>{loginDate}</span>
          </p>
          <br />
          <p>
            Login Time <br /> <span>{loginTime}</span>
          </p>
        </span>
      </div>

      <div className="bar"></div>

      <div className="third">
        <span className="one">
          <p>
            Login Date <br /> <span>{loginDate}</span>
          </p>
          <br />
          <p>
            Login Time <br /> <span>{loginTime}</span>
          </p>
        </span>
      </div>

      <div className="bar"></div>

      <div className="fourth">
        <h3>Activities/Operations</h3>
        <p>{activities}</p>
      </div>
    </div>
  );
};

export default Systemlogcard;
