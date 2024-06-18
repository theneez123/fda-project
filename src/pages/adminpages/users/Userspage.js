import React from 'react';
import styles from './Userspage.module.css';
import SideNav from '../../../components/sidenav/SideNav.js';
import TopNav from '../../../components/topnav/TopNav.js';
import Usercard from '../../../components/usercard/Usercard.js';


function Users() {

  return (
    <div className= {styles.container}>

      <SideNav/>

      <div className= {styles.ContentArea}>
        <TopNav/>
        <div className={styles.MainContent}>         
          <div className= {styles.title}>
            <h1>System Users</h1>
            <p>Get an overview of all users os the system </p>
          </div>
              <Usercard/>
              <Usercard/>
              <Usercard/>
              <Usercard/>
        </div>
      </div>
    </div>
  );
}

export default Users;
