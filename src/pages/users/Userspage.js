import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Userspage.module.css';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import Usercard from '../../components/usercard/Usercard.js';
import Edituserpage from '../../components/edituser/Edituser.js';

function Users() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEditButtonClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userID = localStorage.getItem('userID');
        if (!userID) {
          throw new Error('User ID not found in localStorage');
        }
        const response = await axios.get(`https://four18-fda-backend.onrender.com/users/${userID}`);
        if (response.status === 200) {
          console.log(response);
          const userData = {
            email: response.data.Email,
            userID: response.data._id,
            role: response.data.Role_Name 
          };
          setUsers([userData]); 
        } else if (response.status === 403) {
          setError(response.data.message);
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.ContentArea}>
        <TopNav />
        <div className={styles.MainContent}>
          <div className={styles.title}>
            <h1>System Users</h1>
            <p>Get an overview of all users on the system</p>
          </div>

          {loading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            users.map((user, index) => (
              <Usercard
                key={index}
                email={user.email}
                userid={user.userID}
                role={user.role}
                onEdit={() => handleEditButtonClick(user)}
              />
            ))
          )}
        </div>
      </div>
      <Edituserpage show={showModal} onClose={handleCloseModal} user={selectedUser} />
    </div>
  );
}

export default Users;
