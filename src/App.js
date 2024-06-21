import Login from './pages/loginpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Assetspage from './pages/assetspage/Assetspage';
import Userspage from './pages/users/Userspage';
import Overview from './pages/overview/Overview';
import Departemntpage from './pages/departments/Departmentpage';
import Systemlogs from './pages/systemlogs/Systemlogpage';


function App() {
  return (
    <Router>
        <div className="App">
        
          <Routes>
            <Route exact path='/' element = {<Login/>} />
            <Route path='/overview' element = {<Overview/>} />
            <Route path='/assets' element = {<Assetspage/>} />
            <Route path='/users' element = {<Userspage/>} /> 
            <Route path='/departments' element = {<Departemntpage/>} />
            <Route path='/systemlogs' element = {<Systemlogs/>} />
          </Routes>     
          

        </div>
    </Router>
  );
}

export default App;
