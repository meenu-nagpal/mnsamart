import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './Head.css'
import jquery from 'jquery'
import{Link,NavLink, BrowserRouter as Router, Switch, Route}from 'react-router-dom'

export default function Header() {



    const [category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [SubSubCategory, setSubSubCategory] = useState([])




    const [store, setStore] = useState([])
    const [storesec, setStoreSec] = useState([])
    const [storethree, setStoreThree] = useState([])


    const [temp, setTemp] = useState(0)





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

    var uniquecat = unique.map((k) => {
        return (<li><button style={{ width: "100%",}} value={k} onMouseEnter={(e) => { Handler(e.target.value); setStore(e.target.value) }}>{k}</button></li>)
    })



    function Handler(k) {
        var catklm = category.filter((ct) => {

            if (k == ct.cat_l1) { return true }
        })

        let uniquesec = [...new Set(catklm.map((k) => k.cat_name))];

        var h = uniquesec.map((p) => {
            return (<li><button style={{ width: "100%",}} value={p} onMouseEnter={(f) => { SubCategoryhandler(f.target.value); setStoreSec(f.target.value) }}>{p}</button></li>)

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
           
  
    // return (<li ><button     style={{ width: "100%",}} value={m} onClick={(f) => { setStoreThree(f.target.value) ;sendData()}}>{m}</button></li>)
    return (<li ><button     style={{ width: "100%",}} value={m}   onClick={(f)=>{setStoreThree(f.target.value)}}  >{m}</button></li>)

        })


        setSubSubCategory(catsl3) 
       
    }


   

  
function sendproduct(){
    <Link to ="/category1"></Link>
}

 
    
console.log(store,storesec,storethree) 
    
// var temp=0;
useEffect(()=>{ 
    
console.log(temp)
if(temp!=0){
    var data = {store,storesec,storethree}
    console.log(data)
         axios.post('http://localhost:9000/showproducts',data).then(
             (res) => {
             alert(" category post api");
             console.log(res)
         console.log(data)
                 console.log("status ok from sidenav ategory component")
             }

         ).catch(res => {
             alert("sorry you got an error from category post api");
             })

}

else{setTemp(1)}


  
        
         },[storethree])




  

    

  // const [category, setCategory] = useState([]);
    // const [SubSubCategory, setSubSubCategory] = useState([])





 




    // useEffect(() => {
    //     axios.get('http://localhost:9000/category').then(
    //         (res) => {
    //             console.log(res.data.msg)
    //             setCategory(res.data.msg)
    //         }
    //     )
    // }, [])


    // var cat = category.map((ct) => {
    //     return ct.cat_l1

    // })
    // console.log(cat);

    // let unique = [...new Set(cat)];
    // console.log(unique);

    // var uniquecat = unique.map((k) => {
    //     console.log(k)
    //     return (<li> {k}</li>)
    // })
    // console.log(uniquecat)














    // var subcat = category.map((ct) => {
    //     return ct.cat_name

    // })
    // console.log(subcat);

    // let uniquesec = [...new Set(subcat)];
    // console.log(uniquesec);

    // var uniquesubcat = uniquesec.map((k) => {
    //     console.log(k)
    //     return (<li> {k}</li>)
    // })
    // console.log(uniquesubcat)

    

   

    // var subsubcat = category.map((ct) => {
    //     return ct.cats_l3

    // })
    // console.log(subsubcat);

    // let uniquethree = [...new Set(subsubcat)];
    // console.log(uniquesec);

    // var uniquesubsubcat = uniquethree.map((k) => {
    //     console.log(k)
    //     return (<li> {k}</li>)
    // })
    // console.log(uniquesubsubcat)






//         var catklm2 = category.map((ct) => {
//           return ct.cats_l3
//         })

      
//         console.log(catklm2)
       

// var y=catklm2.flat()
//  console.log(y)

//         let uniquethree = [...new Set(y.filter((k)=>k))];
//         console.log(uniquethree)

//         var catsl3 = uniquethree.map((m) => {

//             return (<li>{m}</li>)

//         })

// console.log(catsl3)
   












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
                         
                       {/* Categories
Women's Fashion
Men's Fashion
TV & Appliances
Mobile Phones
Electronics
Kid's Fashion
Beauty
Home Furnishings */}









                           <li><a href="category.html">{uniquecat}</a>

                               <ul>
                                   <li><a href="#">Variations 1{SubCategory}</a> 
                                   
                                  
                                       <ul >
                                       {/* gridTemplateColumns:"1fr 1fr 1fr" */}
                                       {/* <div style={{ display:" grid" }}  > */}
                                       <li  style={{ display:" grid" }}><a href="category-banner-full-width.html"> <span class="tip tip-hot">Hot!</span></a>{SubSubCategory}</li>
                                         
                                         
                                           {/* <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                           <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                           <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                           <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                           <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                           <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                           <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                                           <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                           <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                           <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                           <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                           <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                           <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                           <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                                           <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                           <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                           <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                           <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                           <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                           <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                           <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                                           <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                           <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                           <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                           <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                           <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                           <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                           <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li> */}
                                           {/* </div> */}


                                          
                                       </ul> 
                                     
                                      
                                   </li>
                                  
                               </ul>
                           </li>






























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

                        <a href="login.html" class="header-icon login-link"><i class="icon-user-2"></i></a>

                        <a href="#" class="header-icon"><i class="icon-wishlist-2"></i></a>

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
                            <a href="#" class="dropdown-toggle dropdown-arrow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
								<i class="icon-shopping-cart"></i>
								<span class="cart-count badge-circle">2</span>
							</a>

                            <div class="dropdown-menu">
                                <div class="dropdownmenu-wrapper">
                                    <div class="dropdown-cart-header">
                                        <span>2 Items</span>

                                        <a href="cart.html" class="float-right">View Cart</a>
                                    </div>
                                    {/* <!-- End .dropdown-cart-header --> */}

                                    <div class="dropdown-cart-products">
                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Woman Ring</a>
                                                </h4>

                                                <span class="cart-product-info">
													<span class="cart-product-qty">1</span> x $99.00
                                                </span>
                                            </div>
                                            {/* <!-- End .product-details --> */}

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
													<img src="assets/images/products/cart/product-1.jpg" alt="product" width="80" height="80" />
												</a>
                                                <a href="#" class="btn-remove icon-cancel" title="Remove Product"></a>
                                            </figure>
                                        </div>
                                        {/* <!-- End .product --> */}

                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Woman Necklace</a>
                                                </h4>

                                                <span class="cart-product-info">
													<span class="cart-product-qty">1</span> x $35.00
                                                </span>
                                            </div>
                                            {/* <!-- End .product-details --> */}

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
													<img src="assets/images/products/cart/product-2.jpg" alt="product" width="80" height="80" />
												</a>
                                                <a href="#" class="btn-remove icon-cancel" title="Remove Product"></a>
                                            </figure>
                                        </div>
                                        {/* <!-- End .product --> */}
                                    </div>
                                    {/* <!-- End .cart-product --> */}

                                    <div class="dropdown-cart-total">
                                        <span>Total</span>

                                        <span class="cart-total-price float-right">$134.00</span>
                                    </div>
                                    {/* <!-- End .dropdown-cart-total --> */}

                                    <div class="dropdown-cart-action">
                                        <a href="checkout-shipping.html" class="btn btn-primary btn-block">Checkout</a>
                                    </div>
                                    {/* <!-- End .dropdown-cart-total --> */}
                                </div>
                                {/* <!-- End .dropdownmenu-wrapper --> */}
                            </div>
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