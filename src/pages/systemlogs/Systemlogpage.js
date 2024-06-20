import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Systemlogpage.css";
import SideNav from "../../../src/components/sidenav/SideNav";
import TopNav from "../../../src/components/topnav/TopNav";
import htmlicon1 from "../../assets/asset.png";
import Systemlogcard from "../../components/systemlogcard/systemlogcard";

const Systemlogpage = () => {
  const [logs, setLogs] = useState({ remoteLogs: [], localLogs: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const userID = localStorage.getItem('userID');
        if (!userID) {
          throw new Error('User ID not found in localStorage');
        }
        const response = await axios.get(`https://four18-fda-backend.onrender.com/logs/${userID}`);
        if (response.status === 200) {
          setLogs(response.data.logData);
        } else if (response.status === 403) {
          setError(response.data.message);
        } else {
          setError('Failed to fetch logs');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch logs');
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="firstcontainer">
      <SideNav />
      <div className="secondcontainer">
        <TopNav />
        <div className="setup">
          <div className="">
            <img className="img" src={htmlicon1} alt="icon" />
            <h1>System Logs</h1>
            <p>Get an overview of all user logs and activities</p>
            <div className="hold">
              {loading && <p>Loading logs...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && logs.remoteLogs.concat(logs.localLogs).length === 0 && <p>No logs found.</p>}
              {!loading && !error && logs.remoteLogs.concat(logs.localLogs).map((log, index) => (
                <Systemlogcard key={index} log={log} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Systemlogpage;
