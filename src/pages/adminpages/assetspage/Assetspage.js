import React from 'react';
import './Assetspagecss.css';
import microscope from '../../../assets/microscope.png'
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import Assetscard from '../../components/assetscard/assetscard.js'


function Assetspage() {

  return (
    <div className="container">
      <SideNav/>
      <div className="ContentArea">

        <TopNav/>
        <div className="MainContent">         
          <div className='title'>
            <h1>Total Assets</h1>
            <p>Overview of the total assets in the industry and its details</p>
            <button className="AddButton">+ Add Asset</button>
          </div>
         
          <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
          <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'stopped'/>
          <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'repairs'/>
          <Assetscard department = 'Safety Monitoring & Clinical Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
          <Assetscard department = 'Trials' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' status= 'working'/>
        </div>
      </div>
    </div>
  );
}

export default Assetspage;
