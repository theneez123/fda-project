import React from 'react';
import './Usercardcss.css';
import microscope from '../../assets/user.png'

function Usercard(props){

    return (
            <div className="container">
            
              <div className= "Userpic">
                  <img src={microscope} alt="Microscope" />
              </div>
            
              <div className="UserInfo">
                <p>UserName: {props.username}</p>
                <p>UserID: {props.userid}</p>
                <p>Email: {props.email}</p>
                <p>RoleID: {props.role}</p>
              </div>
              
            </div>

    );
}

export default Usercard;