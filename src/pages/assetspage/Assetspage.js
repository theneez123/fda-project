import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Assetspage.module.css';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import Assetscard from '../../components/assetscard/assetscard.js';
import assetpic from "../../assets/asset.png";
import Addassetpage from '../../components/addasset/Addasset.js';

function Assetspage() {
  const [showModal, setShowModal] = useState(false);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const userID = localStorage.getItem('userID');
        if (!userID) {
          throw new Error('User ID not found in localStorage');
        }
        const response = await axios.get(`https://four18-fda-backend.onrender.com/assets/${userID}`);
        if (response.status === 200) {
          setAssets(response.data.assets);
        } else if (response.status === 403) {
          setError(response.data.message);
        } else {
          setError('Failed to fetch assets');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch assets');
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteAsset = async (assetID) => {
    const userID = localStorage.getItem('userID');
    try {
      const response = await axios.delete(`https://four18-fda-backend.onrender.com/asset/${userID}/${assetID}`);
      if (response.status === 200) {
        setAssets(assets.filter(asset => asset.id !== assetID));
      }
    } catch (error) {
      console.error('Error deleting asset:', error);
    }
  };

  return (
    <div className={styles.container}>
      <SideNav />
      <div className={styles.ContentArea}>
        <TopNav />
        <div className={styles.MainContent}>
          <div className={styles.title}>
            <img className="img" src={assetpic} alt="icon" />
            <h1>Total Assets</h1>
            <p>Overview of the total assets in the industry and its details</p>
            <button className={styles.AddButton} onClick={handleAddButtonClick}>
              + Add Asset
            </button>
          </div>
        
          <div className={styles.cardarea}>
            {loading && <p>Loading assets...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && assets.length === 0 && <p>No assets found.</p>}
            {!loading && !error && assets.map(asset => (
              <Assetscard
                key={asset.id}
                id={asset.id}
                name={asset.name}
                department={asset.department}
                description={asset.description}
                status={asset.status}
                onDelete={handleDeleteAsset}
              />
            ))}
          </div>
        </div>
      </div>
      <Addassetpage show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Assetspage;
