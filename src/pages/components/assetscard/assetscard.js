import React from 'react';
import './Assetscardcss.css';
import microscope from '../../../assets/microscope.png'

function Assetscard(props){
    return (
            <div className="CardContainer">
        
              <div className='status-wrapper'>
                <div className="Status">
                  <div className={`status-indicator ${props.status}`}>
                  <p>{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</p>
                  </div> 
                </div>
              </div>
        
              <div className='asset'>
                <img src={microscope} alt="Microscope" />
                <div className="AssetInfo">               
                  <h3>Microscope</h3>
                  <p>Department: {props.department}</p>
                  <p>{props.description}</p>
                </div>
              </div>
              
            </div>

    );
}

export default Assetscard;

