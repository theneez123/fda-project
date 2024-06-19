import React, { useState } from "react";
import fdalogo from '../assets/fdalogo.png';
import "./logincss.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://four18-fda-backend.onrender.com/login', {
        userID,
        password
      });

      const data = response.data;
      console.log(data); // Debugging line

      if (data.role) {
        // Store role and userID in localStorage
        localStorage.setItem('role', data.role);
        localStorage.setItem('userID', data.userID);

        // Navigate to overview page
        navigate("/overview");
      } else {
        setErrorMessage('Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={fdalogo} alt="FDA Logo" className="logo" />
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={userID} 
              onChange={(e) => setUserID(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="links">
          <p>If you do not have an account <a href="/signup">Click Here</a></p>
          <p>Have you forgotten your password? <a href="/reset">Reset Now</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
