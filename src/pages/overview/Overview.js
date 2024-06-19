import React from 'react';
import styles from './Overview.module.css';
import fdalogo from '../../assets/fdalogo.png';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';


function Overview () {

  return (
    <div className={styles.container}>
      <SideNav/>
      <div className={styles.ContentArea}>

        <TopNav/>

        <div className= {styles.MainContent}> 

          <div className="header">
            <img src={fdalogo} alt="Logo" />
          </div>    

          <div className={styles.title}>
            <h1>Overview</h1>
            <p>Overview of the total assets in the industry and its details</p>
    
          </div>

          <div className= {styles.cardarea}>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Overview;