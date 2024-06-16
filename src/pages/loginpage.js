import React from 'react'
import fdalogo from '../assets/fdalogo.png'
import "./logincss.css"

const loginpage = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-box">

        <img src={fdalogo} alt="FDA Logo" className="logo" />
        
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
           
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="links">
          <p> If you do not have an account <a href="here">Click Here</a> </p>
          <p>Have you forgotten your password? <a href="/reset"> Reset Now</a></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default loginpage

