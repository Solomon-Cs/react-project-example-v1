import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Login from './components/Login/Login';
import SignUp from './components/SginUp/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
              <Route path='/' exact element= { <Home />} />
              <Route path='/Home' exact element= { <Home />} />
              <Route path='/About' exact element= { <About />} />
              <Route path='/Login' exact element= {  <Login />} />
              <Route path='/SignUp' exact element={ <SignUp />} />   
          </Routes>      
      </Router>
  );
}

export default App