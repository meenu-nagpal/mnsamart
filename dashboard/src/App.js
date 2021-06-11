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
import Category from './Components/Category';
import axios from 'axios';
import RegistrationAk from './Components/RegistrationAk';
import Admin from './Components/Admin';
import StudentDocument from './Components/StudentDocument';


function App() {
  return (
    // <>
     <div>
     <Router>
        {/* <StudentDocument></StudentDocument> */}
      {/* <Dashboard></Dashboard> */}
      <Registration></Registration>
      {/* <RegistrationAk></RegistrationAk> */}
      {/* <Category></Category> */}
      {/* <Profile></Profile> */}
      {/* <Tables></Tables> */}
      {/* <Wizard></Wizard> */}
      {/* <ProductCart></ProductCart> */}
      {/* <Check></Check> */}
      {/* <Admin></Admin> */}
      
     
       </Router>
    </div>
    //  </> 
  )
}

export default App;
