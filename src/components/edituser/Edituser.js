import React, { useState, useEffect } from 'react';
import styles from './Edituser.module.css';
import axios from 'axios';

function Modal({ show, onClose, user }) {
  const [roleId, setRoleId] = useState(user?.roleId || '');
  const [username, setUsername] = useState(user?.username || '');
  const [userId, setUserId] = useState(user?.userId || '');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const userRole = localStorage.getItem('role');

  useEffect(() => {
    if (user) {
      setRoleId(user.roleId);
      setUsername(user.username);
      setUserId(user.userId);
      setEmail(user.email);
    }
  }, [user]);

  if (!show) {
    return null;
  }

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Basic validation
    if (!roleId || !username || !email) {
      setError('Please fill in all the fields.');
      return;
    }

    setLoading(true);

    try {
      // Update user data on the backend
      const response = await axios.put(`https://four18-fda-backend.onrender.com/user/${userId}`, {
        newEmail: email,
        newRoleName: roleId,
        targetUserID: userId,
      });

      // Handle response (e.g., show success message, close modal, etc.)
      if (response.status === 200) {
        setSuccessMessage('User details updated successfully.');
        setTimeout(() => onClose(), 2000); // Close modal after 2 seconds
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        if (error.response.status === 403) {
          setError('You are not authorized to update user details.');
        } else if (error.response.status === 404) {
          setError('User not found or details unchanged.');
        } else {
          setError('Failed to update user. Please try again.');
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An error occurred. Please try again.');
      }
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit User Details</h2>
        <form className={styles.form} onSubmit={handleSaveChanges}>
          {error && <p className={styles.errorMessage}>{error}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          <label>Role ID:</label>
          <select
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            {userRole === 'Admin' && (
              <>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                {/* Add other roles as necessary */}
              </>
            )}
            {userRole === 'Asset Manager' && (
              <option value="asset_manager">Asset Manager</option>
            )}
            {userRole === 'Department Head' && (
              <option value="department_head">Department Head</option>
            )}
            {userRole === 'IT Support' && (
              <option value="it_support">IT Support</option>
            )}
            {/* Add other roles based on your application's role hierarchy */}
          </select>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            disabled
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addButton} disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button type="button" className={styles.cancelButton} onClick={onClose} disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
