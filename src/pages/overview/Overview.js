import React from 'react';
import styles from './Overview.module.css';
import fdalogo from '../../assets/fdalogo.png';
import SideNav from '../../components/sidenav/SideNav.js';
import TopNav from '../../components/topnav/TopNav.js';
import fdaimg from '../../assets/fdaimg.jpg';


function Overview () {

  return (
    <div className={styles.container}>
      <SideNav/>
      <div className={styles.ContentArea}>

        <TopNav/>

        <div className= {styles.MainContent}> 

          <div className={styles.header}>
            <img src={fdalogo} alt="Logo" />
          </div>    

          <div className={styles.title}>
            <h1>Overview</h1>
            <p>Overview of the total assets in the industry and its details</p>
    
          </div>

          <div className= {styles.mission}>
            <div className= {styles.missiontxt}>
                <h3> THE FDA MISSION </h3>
                <p>
                The FDA exist to ensure the safety, 
                quality and efficacy of human and veterinary drugs, 
                food, biological products, cosmetics, medical devices,
                 household chemical substances and clinical trials, and 
                 the control of tobacco products through the enforcement 
                 of relevant standards to protect public health.

                </p>
            </div>
            
            <div className= {styles.missionpic}>
                <img src={fdaimg} alt='img'/>
            </div>

          </div>

          <div className= {styles.newsSection}>
            <div className= {styles.news}>
                <h3> Latest Safety Alerts </h3>
                <p>
                2024 WORLD NO TOBACCO DAY - PROTECTING CHILDREN FROM TOBACCO INDUSTRY INTERFERENCE <br /><br />
                The World No Tobacco Day WNTD
                is commemorated around the world every year on the 
                31st of May to emphasize the harmful effects of 
                tobacco and other tobacco products on health..

                </p>
            </div>
            
            <div className= {styles.news}>
                <h3> News/Upcoming Events </h3>
                <p>
                Ghana's COVID-19 Safety Monitoring Effects Receive Global 
                AcclaimGhana s efforts in monitoring and reporting on
                 the safety of COVID-19 has been recognized globally. 
                 At the 22nd Annual Conference of the International 
                 Society of Pharmacovigilance ISoP in Bali, Indonesia in 
                 November 2023, the Ghana Food and Drug Authority's SafetyWatch
                </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Overview;