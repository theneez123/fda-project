import React from 'react';
import "./Departmentcard.css";
import htmlicon1 from "../../assets/gojo.jpg";


const Departmentcard = () => {
  return (
    <div className="outer">
      <div className="image">
      <img className="img-out" src={htmlicon1} />
        <div className="writing">
          <h1>Food Division</h1>
          <p>
            The Division's mandate as derived from Part 7 of the Public Health
            Act 2012, Act 851, is to protect public health by ensuring the
            availability of safe and quality food on the Ghanaian market.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Departmentcard
