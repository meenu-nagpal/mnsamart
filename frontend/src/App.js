import './App.css';

import React, { useEffect } from 'react';
import{ BrowserRouter as Router,  Route}from 'react-router-dom'

import Category from './Component/Category';
import Product from './Component/Product';
import Cart from './Component/Cart';
import CheckOut from './Component/CheckOut';
import CheckSecond from './Component/CheckSecond';
import Contact from './Component/Contact';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Login from './Component/Login'






function App() {
  


  return (
    <div className="App">    

       <Router>
         <Header></Header>
   <Route path="/" exact component={Main}/>
   <Route path="/category1" exact component={Category}/>
{/* <Login></Login> */}


   <Route path="/product1" exact component={Product}/>

   <Route path="/cart" exact component={Cart}/>
   <Route path="/checkout" exact component={CheckOut}/>
   <Route path="/checksecond" exact component={CheckSecond}/> 
   <Route path="/Login" exact component={Login}/>


 <Footer></Footer> 
 
     
      </Router>   


       
   
{/* <Login></Login> */}




    </div>   
  );
}

export default App;
