import React, { useState } from "react";
import fdalogo from '../assets/fdalogo.png';
import "./logincss.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post("https://four18-fda-backend.onrender.com/login", {
        userID,
        password
      });

      console.log('Login response:', response); // Log the response for debugging

      const data = response.data;
      console.log(data);

      if (response.status === 200) {

        localStorage.setItem('role', data.roleName);
        localStorage.setItem('userID', userID); 

        navigate("/overview");
      } else {
        setErrorMessage('Invalid credentials, please try again.');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage(error.response.data.message || 'Unauthorized access.');
        } else {
          setErrorMessage('An error occurred during login. Please try again.');
        }
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
      console.error('Login error:', error); // Log the error for further analysis
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={fdalogo} alt="FDA Logo" className="logo" />
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">User ID</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={userID} 
              onChange={(e) => setUserID(e.target.value)} 
              required 
              aria-label="Enter your username"
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
              aria-label="Enter your password"
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
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
