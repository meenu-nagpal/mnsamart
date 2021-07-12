import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import React, {Component, useEffect ,useState} from 'react'
import Admin from './Components/Admin';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Wizard from './Components/Wizard';
import{ BrowserRouter as Router,  Route}from 'react-router-dom'









export default function App() {

 
  
    return (
      <div>


        
         {/* <Login></Login> */}
            {/* <Dashboard></Dashboard> */}

           {/* <Admin></Admin> */}
           {/* <Registration></Registration> */}
           {/* <StudentDocument></StudentDocument> */}
           {/* <Wizard></Wizard> */}
           <Login></Login>


           {/* <Route path="/login" exact component={Login} /> */}
           
      </div>
    )

}
