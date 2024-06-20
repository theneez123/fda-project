import React from "react";
import "./Departmentpage.css";
import SideNav from "../../../src/components/sidenav/SideNav";
import TopNav from "../../../src/components/topnav/TopNav";
import Departmentcard from "../../components/departmentcard/Departmentcard"; 
import department from "../../assets/department.png";


const Departmentpage = () => {
  return (
    <div className="firstcontainer">
      <SideNav />
      <div className="secondcontainer">
        <TopNav />
        <div className="thirdcontainer">
          <div className="main">
      <   img className="img" src={department} alt="icon"/>
            
            <h1>Departments </h1>
            <p>
              Our able members are all categorized and grouped in their various
              department to enable  to beefficiency and effectiveness in their
              production process
            </p>
            <div className="covers">
               <Departmentcard name = "Food Division" description="The Division's mandate as derived from Part 7 of the Public Health
                      Act 2012, Act 851, is to protect public health by ensuring the
                      availability of safe and quality food on the Ghanaian market."/>
               <Departmentcard name = "Drug Registration & Inspectorate" description="The Division's mandate as derived from Part 6, 7 & 8 of the Public Health Act 2012, Act 851, is to protect public health and safety by ensuring the availability of safe, efficacious and quality allopathic medicines"/>
               <Departmentcard name = "Safty Monitoring & Clinical Trials" description="The Safety Monitoring Department of the Food and Drugs Authority hosts the National Pharmacovigilance Centre. The Centre joined the WHO Programme for International Drug Monitoring (PIDM) in November 2001 as the 65th member of the Programme."/>
               <Departmentcard name = "Medical Devices & Cosmetics" description="The Division's mandate derived from Part 7 of the Public Health Act 2012, Act 851, is to protect public health by ensuring the availability of safe, effective and quality medical devices, cosmetics, and household chemical substances on the Ghanaian market."/>
               <Departmentcard name = "Monitoring & Evaluation" description="Overview of the Monitoring and Evaluation Division
The Monitoring and Evaluation Division coordinates the process of planning and budgeting at the FDA. It is also responsible for monitoring and evaluation of the FDA's annual programme of work and strategic plan."/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departmentpage;
