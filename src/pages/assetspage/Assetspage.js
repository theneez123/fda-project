import React from 'react';
import styles from './Assetspage.module.css';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import Assetscard from '../../components/assetscard/assetscard.js'

function Assetspage() {

  return (
    <div className={styles.container}>
      <SideNav/>
      <div className={styles.ContentArea}>

        <TopNav/>
        <div className= {styles.MainContent}>         
          <div className={styles.title}>
            <h1>Total Assets</h1>
            <p>Overview of the total assets in the industry and its details</p>
            <button className={styles.AddButton}>+ Add Asset</button>
          </div>

          <div className= {styles.cardarea}>
            <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
            <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'stopped'/>
            <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'repairs'/>
            <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
            <Assetscard department = 'Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assetspage;
