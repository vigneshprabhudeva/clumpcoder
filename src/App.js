import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar"

import Homepage from './components/Homepage';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      
    
    <Route path="/home">
     <Homepage/>
    </Route>
    <Route exact path="/">
    <Login/>
    </Route>
      
       


      </Router>
      
   
    </div>
  );
}

export default App;
