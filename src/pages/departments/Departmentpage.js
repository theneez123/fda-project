import React from "react";
import "./Departmentpage.css";
import SideNav from "../../../src/components/sidenav/SideNav";
import TopNav from "../../../src/components/topnav/TopNav";
import Departmentcard from "../../components/departmentcard/Departmentcard"; 
import htmlicon1 from "../../assets/gojo.jpg";


const Departmentpage = () => {
  return (
    <div className="firstcontainer">
      <SideNav />
      <div className="secondcontainer">
        <TopNav />
        <div className="thirdcontainer">
          <div className="main">
      <img className="img" src={htmlicon1} alt="icon"/>
            
            <h1>Departments </h1>
            <p>
              Our able members are all categorized and grouped in their various
              department to enable  to beefficiency and effectiveness in their
              production process
            </p>
            <div className="covers">
               <Departmentcard/>
               <Departmentcard/>
               <Departmentcard/>
               <Departmentcard/>
               <Departmentcard/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departmentpage;
