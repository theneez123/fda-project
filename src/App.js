import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/loginpage';
import Assetspage from './pages/assetspage/Assetspage';
import Userspage from './pages/users/Userspage';
import Overview from './pages/overview/Overview';
import Departmentpage from './pages/departments/Departmentpage';
import Systemlogs from './pages/systemlogs/Systemlogpage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/assets' element={<Assetspage />} />
          <Route path='/users' element={<Userspage />} />
          <Route path='/departments' element={<Departmentpage />} />
          <Route path='/systemlogs' element={<Systemlogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
