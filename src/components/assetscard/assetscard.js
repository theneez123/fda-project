import React from 'react';
import './Assetscardcss.css';
import microscope from '../../assets/microscope.png';

function Assetscard({ id, name, procurementDate, serialNumber, tagID, statusName, onDelete }) {
  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete the asset: ${name}?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="CardContainer">
      <div className='asset'>
        <img src={microscope} alt="Microscope" />
        <div className="AssetInfo">
          <h3>{name}</h3>
          <p>Procurement Date: {new Date(procurementDate).toLocaleDateString()}</p>
          <p>Serial Number: {serialNumber}</p>
          <p>Tag ID: {tagID}</p>
          <p>Status: {statusName}</p>
        </div>
      </div>
      <button className='deletebtn' onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Assetscard;
