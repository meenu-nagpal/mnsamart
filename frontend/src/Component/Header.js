import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,NavLink } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import Login from './Login';

import { postapi, setLoginVisibility } from '../Actions/TodoActions'; 
import { baseURL } from '../Conf';

export default function Header(props) {



    const [category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [SubSubCategory, setSubSubCategory] = useState([])




    const [store, setStore] = useState([])
    const [storesec, setStoreSec] = useState([])
    const [storethree, setStoreThree] = useState([])


    const [temp, setTemp] = useState(0)

    const dispatch = useDispatch()






    const ctr = useSelector(state => state.ctr)
    console.log(ctr);


  



    useEffect(() => {
        axios.get('http://localhost:9000/category').then(
            (res) => {
                console.log(res.data.msg)
                setCategory(res.data.msg)
            }
        )
    }, [])


   




  


    var cat = category.map((ct) => {
        return ct.cat_l1

    })

    let unique = [...new Set(cat)];
console.log(unique)
    var uniquecat = unique.map((k) => {
        // return (<li><button style={{ width: "100%",}} value={k} onMouseEnter={(e) => { Handler(e.target.value); setStore(e.target.value) }}>{k}</button></li>)
  console.log(k)
        return (<button value={k} onMouseEnter={(e) => { Handler(e.target.value); setStore(e.target.value) }}>{k}</button>)
        // return (<li value={k} onMouseEnter={(e) => { Handler(e.target.value); setStore(e.target.value) }}>{k}</li>)
  
  
    })

console.log(uniquecat)

    function Handler(k) {
        // alert(k)
        console.log(k)
        var catklm = category.filter((ct) => {

            if (k == ct.cat_l1) { return true }
        })

        let uniquesec = [...new Set(catklm.map((k) => k.cat_name))];

        var h = uniquesec.map((p) => {
            // return (<li><button style={{ width: "100%",}} value={p} onMouseEnter={(f) => { SubCategoryhandler(f.target.value); setStoreSec(f.target.value) }}>{p}</button></li>)
            // return (<a value={p} onMouseEnter={(f) => { SubCategoryhandler(f.target.value); setStoreSec(f.target.value) }}>{p}</a>)
            return (<button style={{display:"block", width: "100%",}} value={p} onMouseEnter={(f) => { SubCategoryhandler(f.target.value); setStoreSec(f.target.value) }}>{p}</button>)

        })

        setSubCategory(h)



    }


    function SubCategoryhandler(g) {

        var catklm2 = category.filter((ct) => {
            if (g == ct.cat_name) { return true }
        })

        var y = []
        var k = y.push(catklm2)

        let uniquethree = [...new Set(y.map((k) => k[0].cats_l3))];

        var catsl3 = uniquethree[0].map((m) => {
           
  
    // return (<NavLink  to='/category1'><li ><button     style={{ width: "100%",}} value={m}   onClick={(f)=>{setStoreThree(f.target.value) }}  >{m}</button></li></NavLink>)
    return (<NavLink  to='/category1'><button     style={{ width: "100%",}} value={m}   onClick={(f)=>{setStoreThree(f.target.value) }}  >{m}</button></NavLink>)

        })


        setSubSubCategory(catsl3) 
       
    }


   
 
console.log(store,storesec,storethree) 
    


useEffect(()=>{ 
    
console.log(temp)
if(temp!=0){
    var data = {store,storesec,storethree}
    console.log(data)
      
       dispatch(postapi(data))

}

else{setTemp(1)}

      
         },[storethree])


var o=uniquecat.map((l)=>{return(
   

    <li><a href="#">{l}</a>
    <ul>
        <li><a href="#">{SubCategory}</a>


            <ul>
                <li><a href="checkout-shipping.html">{SubSubCategory}</a></li>
               
            </ul>
        </li>
       
      
    </ul>
</li>


)})



const onClick = () => dispatch(setLoginVisibility(true));

const LoginVisibility = useSelector(state => state.LoginVisibility)
const loggedInUser = useSelector(state => state.loggedInUser);


    return (
        <div>
    <div class="page-wrapper "  >




        
     

        <header class="header header-transparent " >
            <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                        <a href="index.html" class="logo">
							<img src="assets/images/logo.png" alt="Porto Logo" />
						</a>

                        <nav class="main-nav font2">
                            <ul class="menu sf-arrows">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
          
                   <li>
                       <a href="#" class="sf-with-ul" style={{color:"red"}}>Categories</a>
                       <ul>
                         
                




{/* 
                           <li><a href="category.html"> {o} </a>
                               <ul>
                                   
                                  {m}
                                       <ul >
                                     
                                       <li  style={{ display:" grid"}}><a href="category-banner-full-width.html"> <span class="tip tip-hot">Hot!</span></a>{SubSubCategory}</li>
                                         
                                                                                  
                                       </ul> 
                                     
                                      
                                  
                               </ul>
                           </li>  */}




{o}























                           <li><a href="product.html">Products</a>
                               <ul>
                                   <li><a href="#">Variations</a>
                                       <ul>
                                           <li><a href="product.html">Horizontal Thumbnails</a></li>
                                           <li><a href="product-full-width.html">Vertical Thumbnails<span class="tip tip-hot">Hot!</span></a></li>
                                           <li><a href="product.html">Inner Zoom</a></li>
                                           <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                           <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                       </ul>
                                   </li>
                                   <li><a href="#">Variations</a>
                                       <ul>
                                           <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                           <li><a href="product-simple.html">Simple Product</a></li>
                                           <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                       </ul>
                                   </li>
                                   <li><a href="#">Product Layout Types</a>
                                       <ul>
                                           <li><a href="product.html">Default Layout</a></li>
                                           <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                           <li><a href="product-full-width.html">Full Width Layout</a></li>
                                           <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                           <li><a href="product-sticky-both.html">Sticky Both Side Info<span class="tip tip-hot">Hot!</span></a></li>
                                           <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                       </ul>
                                   </li>
                               </ul>
                           </li>
                           <li><a href="#">Pages</a>
                               <ul>
                                   <li><a href="cart.html">Shopping Cart</a></li>
                                   <li><a href="#">Checkout</a>
                                       <ul>
                                           <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                           <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                           <li><a href="checkout-review.html">Checkout Review</a></li>
                                       </ul>
                                   </li>
                                   <li><a href="#">Dashboard</a>
                                       <ul>
                                           <li><a href="dashboard.html">Dashboard</a></li>
                                           <li><a href="my-account.html">My Account</a></li>
                                       </ul>
                                   </li>
                                   <li><a href="about.html">About Us</a></li>
                                   <li><a href="#">Blog</a>
                                       <ul>
                                           <li><a href="blog.html">Blog</a></li>
                                           <li><a href="single.html">Blog Post</a></li>
                                       </ul>
                                   </li>
                                   <li><a href="contact.html">Contact Us</a></li>
                                   <li><a href="#" class="login-link">Login</a></li>
                                   <li><a href="forgot-password.html">Forgot Password</a></li>
                               </ul>
                           </li>
                           <li><a href="#" class="sf-with-ul">Features</a>
                               <ul>
                                   <li><a href="#">Header Types</a></li>
                                   <li><a href="#">Footer Types</a></li>
                               </ul>
                           </li>
                       </ul>
                   </li>       
                                <li>
                                    <a href="product.html">Products</a>
                                    <div class="megamenu megamenu-fixed-width">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <a href="#" class="nolink">Variations 1</a>
                                                <ul class="submenu">
                                                    <li><a href="product.html">Horizontal Thumbs</a></li>
                                                    <li><a href="product-full-width.html">Vertical Thumbnails</a></li>
                                                    <li><a href="product.html">Inner Zoom</a></li>
                                                    <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                                    <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- End .col-lg-4 --> */}
                                            <div class="col-lg-3">
                                                <a href="#" class="nolink">Variations 2</a>
                                                <ul class="submenu">
                                                    <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                                    <li><a href="product-simple.html">Simple Product</a></li>
                                                    <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- End .col-lg-4 --> */}
                                            <div class="col-lg-3">
                                                <a href="#" class="nolink">Product Layout Types</a>
                                                <ul class="submenu">
                                                    <li><a href="product.html">Default Layout</a></li>
                                                    <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                                    <li><a href="product-full-width.html">Full Width Layout</a></li>
                                                    <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                                    <li><a href="product-sticky-both.html">Sticky Both Side Info</a></li>
                                                    <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- End .col-lg-4 --> */}
                                            <div class="col-lg-3 p-0">
                                                <img src="assets/images/menu-bg.png" alt="Menu banner" class="product-promo" />
                                            </div>
                                            {/* <!-- End .col-lg-4 --> */}
                                        </div>
                                        {/* <!-- End .row --> */}
                                    </div>
                                    {/* <!-- End .megamenu --> */}
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="#">Checkout</a>
                                            <ul>
                                                <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                                <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                                <li><a href="checkout-review.html">Checkout Review</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Dashboard</a>
                                            <ul>
                                                <li><a href="dashboard.html">Dashboard</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single.html">Blog Post</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#" class="login-link">Login</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- End .header-left --> */}

                    <div class="header-right">
                        <button class="mobile-menu-toggler" type="button">
							<i class="icon-menu"></i>
						</button>


                    {loggedInUser && <a href="#" class="header-icon" >log out</a>}  
                    {loggedInUser &&   <a href={baseURL+"dashboard"} class="header-icon" >My Dashboard </a>}  

                        <button onClick={onClick} style={{margin:"5px"}}><i class="icon-user-2"></i></button>
                        { LoginVisibility ? <Login/> : null }

                        <div class="header-search header-search-popup header-search-category d-none d-sm-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="I'm searching for..." required="" />
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
											<option value="">All Categories</option>
											<option value="4">Fashion</option>
											<option value="12">- Women</option>
											<option value="13">- Men</option>
											<option value="66">- Jewellery</option>
											<option value="67">- Kids Fashion</option>
											<option value="5">Electronics</option>
											<option value="21">- Smart TVs</option>
											<option value="22">- Cameras</option>
											<option value="63">- Games</option>
											<option value="7">Home &amp; Garden</option>
											<option value="11">Motors</option>
											<option value="31">- Cars and Trucks</option>
											<option value="32">- Motorcycles &amp; Powersports</option>
											<option value="33">- Parts &amp; Accessories</option>
											<option value="34">- Boats</option>
											<option value="57">- Auto Tools &amp; Supplies</option>
										</select>
                                    </div>
                                    {/* <!-- End .select-custom --> */}
                                    <button class="btn bg-dark icon-search-3" type="submit"></button>
                                </div>
                                {/* <!-- End .header-search-wrapper --> */}
                            </form>
                        </div>

                        <div class="dropdown cart-dropdown">
                            
								
                                <Link to="/cart" class="float-right"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
								
                                </Link>
                                <sup><span class="cart-count badge-circle"> {ctr}</span></sup>

                          
                            {/* <!-- End .dropdown-menu --> */}
                        </div>
                        {/* <!-- End .dropdown --> */}
                    </div>
                    {/* <!-- End .header-right --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .header-middle --> */}
        </header>
        {/* <!-- End .header --> */}
</div>
        </div>
    )
}
