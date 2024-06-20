import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Userspage.module.css';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import Usercard from '../../components/usercard/Usercard.js';
import Modal from '../../components/edituser/Edituser.js';

function Users() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [targetUserID, setTargetUserID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEditButtonClick = (targetUserID) => {
    setTargetUserID(targetUserID);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          console.log(response.data);
          setUsers(response.data.userData);
        } else if (response.status === 403) {
          setError(response.data.message);
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
        console.log(users);
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
                email={user.Email}
                userid={user._id}
                role={user.role.Role_Name}
                onEdit={() => handleEditButtonClick(user._id)}
              />
            ))
          )}
        </div>
      </div>
      {showModal && <Modal show={showModal} handleCloseModal={handleCloseModal} targetUserID={targetUserID} />}
    </div>
  );
}

export default Users;
