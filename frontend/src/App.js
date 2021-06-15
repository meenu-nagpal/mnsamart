import logo from './logo.svg';
import './App.css';
import{Link,NavLink, BrowserRouter as Router, Switch, Route}from 'react-router-dom'

import Category from './Component/Category';
import Product from './Component/Product';
import Cart from './Component/Cart';
import CheckOut from './Component/CheckOut';
import CheckSecond from './Component/CheckSecond';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Home from './Component/Home';



function App() {
  return (
    <div className="App">    
    <Router>
        <Header></Header>

               <Route path="/" exact component={Main}/>
                <Route path="/category1" exact component={Category}/>
                <Route path="/product1" exact component={Product}/>
      {/* <Product></Product>  */}

                <Route path="/cart" exact component={Cart}/>
                <Route path="/checkout" exact component={CheckOut}/>
                <Route path="/checksecond" exact component={CheckSecond}/>


      <Footer></Footer>
      {/* <Category></Category> */}
      {/* <Product></Product>  */}
      {/* <Cart></Cart> */}
      {/* <CheckOut></CheckOut> */}
      {/* <CheckSecond></CheckSecond>  */}
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}

      </Router> 
    </div>
  );
}

export default App;
