import React, { useState, useEffect } from 'react';
import styles from './Edituser.module.css';
import axios from 'axios';

const roleOptions = ['Admin', 'Asset Manager', 'Department Head', 'IT Support'];

function Modal({ show, handleCloseModal, targetUserID }) {
  const [newUserData, setNewUserData] = useState({
    newEmail: '',
    newRoleName: '',
    targetUserID: targetUserID,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const currentUserID = localStorage.getItem("userID");

  useEffect(() => {
    if (show) {
      setNewUserData({ ...newUserData, targetUserID });
    }
  }, [show, targetUserID]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    const { newEmail, newRoleName } = newUserData;

    if (!newEmail || !newRoleName) {
      setError('Please fill in all the fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(`https://four18-fda-backend.onrender.com/user/${currentUserID}`, {
        newEmail,
        newRoleName,
        targetUserID,
      });

      if (response.status === 200) {
        console.log('User details updated successfully.');
        alert('User details updated successfully.');
        setTimeout(() => handleCloseModal(), 2000);
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          setError('You are not authorized to update user details.');
        } else if (error.response.status === 404) {
          setError('User not found or details unchanged.');
        } else {
          setError('Failed to update user. Please try again.');
        }
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit User Details</h2>
        <form className={styles.form} onSubmit={handleSaveChanges}>
          {error && <p className={styles.errorMessage}>{error}</p>}

          <label>User ID:</label>
          <input type="text" value={targetUserID} disabled />

          <label>Email:</label>
          <input
            type="email"
            value={newUserData.newEmail}
            onChange={(e) => setNewUserData({ ...newUserData, newEmail: e.target.value })}
            required
          />

          <label>User Role:</label>
          <select
            value={newUserData.newRoleName}
            onChange={(e) => setNewUserData({ ...newUserData, newRoleName: e.target.value })}
            required
          >
            <option value="">Select role</option>
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addButton} disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button type="button" className={styles.cancelButton} onClick={handleCloseModal} disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
