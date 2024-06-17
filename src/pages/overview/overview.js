import React from 'react'
import './overviewcss.css';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';


const overview = () => {

  return (
    <div className="container">
      <SideNav/>
      <div className="ContentArea">

        <TopNav/>
        <div className="MainContent">         
          Main page

        </div>
      </div>
    </div>
  );
}

export default overview

