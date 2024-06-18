import Login from './pages/loginpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Assetspage from './pages/adminpages/assetspage/Assetspage';
import Userspage from './pages/adminpages/users/Userspage';
import Overview from './pages/adminpages/overview/Overview';

function App() {
  return (
    <Router>
        <div className="App">
        
          <Routes>
            <Route path='/' element = {<Login/>} />
            <Route path='/overview' element = {<Overview/>} />
            <Route path='/assets' element = {<Assetspage/>} />
            <Route path='/users' element = {<Userspage/>} /> 
          </Routes>     
          

        </div>
    </Router>
  );
}

export default App;
