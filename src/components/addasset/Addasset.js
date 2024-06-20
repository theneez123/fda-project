import React, { useState } from 'react';
import styles from './Addasset.module.css';
import axios from 'axios';

function Addassetpage({ show, onClose }) {
  const [assetName, setAssetName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [tagID, setTagID] = useState('');
  const [procuredDate, setProcuredDate] = useState('');
  const [assetStatus, setAssetStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  if (!show) {
    return null;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const userID = localStorage.getItem('userID');
    if (!userID) {
      setError('User ID not found in localStorage');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://four18-fda-backend.onrender.com/assets/${userID}`, {
        assetName: assetName,
        serialNumber: serialNumber.toString(),
        tagID: tagID.toString(),
        procurementDate: procuredDate,
        assetStatus: assetStatus,
      });

      if (response.status === 201) {
        setSuccess(true);
        
        setAssetName('');
        setSerialNumber('');
        setTagID('');
        setProcuredDate('');
        setAssetStatus('');
      } else {
        setError(response.data.message || 'Failed to add asset.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Asset Details</h2>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label>Asset Name:</label>
          <input type="text" value={assetName} onChange={(e) => setAssetName(e.target.value)} required />
          <label>Serial Number:</label>
          <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
          <label>Tag ID:</label>
          <input type="text" value={tagID} onChange={(e) => setTagID(e.target.value)} required />
          <label>Procured Date:</label>
          <input type="date" value={procuredDate} onChange={(e) => setProcuredDate(e.target.value)} required />
          <label>Asset Status:</label>
          <input type="text" value={assetStatus} onChange={(e) => setAssetStatus(e.target.value)} required />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addButton} disabled={loading}>
              {loading ? 'Adding...' : 'Add Asset'}
            </button>
            <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
          </div>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Asset added successfully!</p>}
      </div>
    </div>
  );
}

export default Addassetpage;
