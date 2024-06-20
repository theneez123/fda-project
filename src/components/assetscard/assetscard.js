import React from 'react';
import './Assetscardcss.css';
import microscope from '../../assets/microscope.png';

function Assetscard({ id, name, department, description, status, onDelete }) {
  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete the asset: ${name}?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="CardContainer">
      <div className='status-wrapper'>
        <div className="Status">
          <div className={`status-indicator ${status}`}>
            <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        </div>
        <button className='deletebtn' onClick={handleDeleteClick}> Delete </button>
      </div>

      <div className='asset'>
        <img src={microscope} alt="Microscope" />
        <div className="AssetInfo">
          <h3>{name}</h3>
          <p>Department: {department}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Assetscard;
