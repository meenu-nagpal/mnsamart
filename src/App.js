import logo from './logo.svg';
import './App.css';
import React from 'react'
import{Link,NavLink, BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Registration from './Components/Registration';
import Profile from './Components/Profile';
import Tables from './Components/Tables';
import Wizard from './Components/Wizard';
import ProductCart from './Components/ProductCart';
import Check from './Components/Check';


function App() {
  return (
    // <>
     <div>
     <Router>
        
      {/* <Dashboard></Dashboard> */}
      <Registration></Registration>
      {/* <Profile></Profile> */}
      {/* <Tables></Tables> */}
      {/* <Wizard></Wizard> */}
      {/* <ProductCart></ProductCart> */}
      {/* <Check></Check> */}
      
     
       </Router>
    </div>
    //  </> 
  )
}

export default App;
