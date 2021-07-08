import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import React, {Component, useEffect ,useState} from 'react'
import Admin from './Components/Admin';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Wizard from './Components/Wizard';









export default function App() {

 
  
    return (
      <div>
         {/* <Login></Login> */}
            <Dashboard></Dashboard>

           {/* <Admin></Admin> */}
           {/* <Registration></Registration> */}
           {/* <StudentDocument></StudentDocument> */}
           {/* <Wizard></Wizard> */}
           
      </div>
    )

}
