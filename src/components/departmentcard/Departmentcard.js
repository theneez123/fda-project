import React from 'react';
import "./Departmentcard.css";
import dept from "../../assets/deptimg.png";


const Departmentcard = (props) => {
  return (
    <div className="outer">
      <div className="image">
      <img className="img-out" src={dept} alt='dept'/>
        <div className="writing">
          <h1>{props.name}</h1>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Departmentcard
