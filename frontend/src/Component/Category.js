import { Link,NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useSelector ,useDispatch } from 'react-redux';

import { selectProduct} from '../Actions/TodoActions';










export default function Category() {
 
  

    const dispatch = useDispatch()



    const post = useSelector(state => state.postapi);
    console.log(post);

    var klm=post.flat(Infinity)
    console.log(klm);

    // var k=klm.map((l)=>{return (<li>{l.images.mainimage}</li>)})

    var k=klm.map((l)=>{return (
    
        // style={{ display: "grid", gridTemplateRows: "", gridGap: "10px"}}
                     <div style={{display:"inline-block"}} class="col-3 col-sm-4 col-md-3 col-xl-4col">
                    {/* // <div style={{ display: "grid", gridTemplateRows: "100px 300px ", width:"200px" }}> */}

                         {/* class="row" */}
                        {/* <div  > */}
                           {/* <div > */}
                           {/* <div > */}

                               <div class="product-default inner-quickview inner-icon">
                                   <figure>
                         <Link to="/product1">

                                           {/* <img src={`http://localhost:9000/${l.images.mainimage}`}  ></img>  */}
                                        
<img onClick={()=>{callimg(l._id)}}  src={`http://localhost:9000/${l.images.mainimage}`}  ></img> 
                                        
                                        
                                        
                                        </Link> 





                                       <div class="label-group">
                                           <span class="product-label label-sale">-20%</span>
                                       </div>
                                       <div class="btn-icon-group">
                                           <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-shopping-cart"></i></button>
                                       </div>
                                   </figure>
                                   <div class="product-details">
                                       <div class="category-wrap">
                                           <div class="category-list">
                                               <a href="category.html" class="product-category">category</a>
                                           </div>
                                       </div>
                                       <h2 class="product-title">
                                           <a href="product.html">Product Short Name</a>
                                       </h2>
                                       <div class="ratings-container">
                                           <div class="product-ratings">
                                               <span class="ratings" style={{width:"100%"}}></span>
                                               {/* <!-- End .ratings --> */}
                                               <span class="tooltiptext tooltip-top"></span>
                                           </div>
                                           {/* <!-- End .product-ratings --> */}
                                       </div>
                                       {/* <!-- End .product-container --> */}
                                       <div class="price-box">
                                           <span class="old-price">{l.price}</span>
                                           <span class="product-price">$49.00</span>
                                       </div>
                                       {/* <!-- End .price-box --> */}
                                   </div>
                                   {/* <!-- End .product-details --> */}
                               </div>
                           {/* </div> */}
                         

                         
                        
                           
                       {/* </div> */}
                        </div> 

    )})









    function  callimg(h){
        alert(h)
        var m=klm.filter((p)=>{

if(p._id==h){
    console.log(p)
dispatch(selectProduct(p));   

return (p)
}


        })

console.log(m)
    }








 
    console.log(k)
    const loading = useSelector(state => state.loading);



    return (




        <div>
      
        {loading?"lodding...":""}

              <div class="page-wrapper " style={{ paddingTop:"100px"}}>
       
       {/* <!-- End .header --> */}

       <main class="main">
           <nav aria-label="breadcrumb" class="breadcrumb-nav mb-md-4">
               <div class="container">
                   <ol class="breadcrumb">
                       <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                       <li class="breadcrumb-item"><a href="#">Men</a></li>
                       <li class="breadcrumb-item active" aria-current="page">Accessories</li>
                   </ol>
               </div>
               {/* <!-- End .container --> */}
           </nav>

           <div class="container mb-3">
               <div class="row row-sparse">
                   <div class="col-lg-9 main-content">
                       <div class="category-banner">
                           <img class="slide-bg" src="assets/images/banners/banner-1.jpg" alt="banner" width="1500" height="320" />
                           
                           {/* <img class="slide-bg" src="http://localhost:3000/mai-1623679359588..jpeg" alt="banner" width="1500" height="320" /> */}
                           
                           
                           <div class="category-slide-content">
                               <h2 class="m-b-3">Winter Fashion Trends</h2>
                               <h3 class="text-uppercase m-b-4">Up to 30% off on Jackets</h3>

                               <h5 class="text-uppercase d-inline-block mb-0">Starting at<span class="coupon-sale-text"><sup>$</sup>199<sup>99</sup></span></h5>
                               <a href="category.html" class="btn btn-dark btn-xl" role="button">Shop Now</a>
                           </div>
                           {/* <!-- End .category-slide-content --> */}
                       </div>
                       {/* <!-- End .category-slide --> */}

                       <nav class="toolbox">
                           <div class="toolbox-left">
                               <div class="toolbox-item toolbox-sort">
                                   <label>Sort By:</label>

                                   <div class="select-custom">
                                       <select name="orderby" class="form-control">
                                           <option value="menu_order" selected="selected">Default sorting</option>
                                           <option value="popularity">Sort by popularity</option>
                                           <option value="rating">Sort by average rating</option>
                                           <option value="date">Sort by newness</option>
                                           <option value="price">Sort by price: low to high</option>
                                           <option value="price-desc">Sort by price: high to low</option>
                                       </select>
                                   </div>
                                   {/* <!-- End .select-custom --> */}


                               </div>
                               {/* <!-- End .toolbox-item --> */}
                           </div>
                           {/* <!-- End .toolbox-left --> */}

                           <div class="toolbox-right">
                               <div class="toolbox-item toolbox-show">
                                   <label>Show:</label>

                                   <div class="select-custom">
                                       <select name="count" class="form-control">
                                           <option value="20">20</option>
                                           <option value="30">30</option>
                                           <option value="40">40</option>
                                           <option value="50">50</option>
                                       </select>
                                   </div>
                                   {/* <!-- End .select-custom --> */}
                               </div>
                               {/* <!-- End .toolbox-item --> */}

                               <div class="toolbox-item layout-modes">
                                   <a href="category.html" class="layout-btn btn-grid active" title="Grid">
                                       <i class="icon-mode-grid"></i>
                                   </a>
                                   <a href="category-list.html" class="layout-btn btn-list" title="List">
                                       <i class="icon-mode-list"></i>
                                   </a>
                               </div>
                               {/* <!-- End .layout-modes --> */}
                           </div>
                           {/* <!-- End .toolbox-right --> */}
                       </nav>
           
           <div >
           {/* <Link to="/product1"> */}
               
               {k}
              {/* </Link>  */}
               
               </div>
               <nav class="toolbox toolbox-pagination">
                           <div class="toolbox-item toolbox-show">
                               <label>Show:</label>

                               <div class="select-custom">
                                   <select name="count" class="form-control">
                                       <option value="12">12</option>
                                       <option value="24">24</option>
                                       <option value="36">36</option>
                                   </select>
                               </div>
                               {/* <!-- End .select-custom --> */}
                           </div>
                           {/* <!-- End .toolbox-item --> */}

                           <ul class="pagination toolbox-item">
                               <li class="page-item active">
                                   <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                               </li>
                               <li class="page-item"><a class="page-link" href="#">2</a></li>
                               <li class="page-item"><a class="page-link" href="#">3</a></li>
                               <li class="page-item"><a class="page-link" href="#">4</a></li>
                               <li class="page-item"><a class="page-link" href="#">5</a></li>
                               <li class="page-item"><span class="page-link">...</span></li>
                               <li class="page-item">
                                   <a class="page-link page-link-btn" href="#"><i class="icon-angle-right"></i></a>
                               </li>
                           </ul>
                       </nav>
                   </div>
                   {/* <!-- End .main-content --> */}

                   <div class="sidebar-overlay"></div>
                   <div class="sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
                   <aside class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                       <div class="sidebar-wrapper">
                           <div class="widget">
                               <h3 class="widget-title">
                                   <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Categories</a>
                               </h3>

                               <div class="collapse show" id="widget-body-2">
                                   <div class="widget-body">
                                       <ul class="cat-list">
                                           <li><a href="#">Accessories</a></li>
                                           <li><a href="#">Watch Fashion</a></li>
                                           <li><a href="#">Tees, Knits &amp; Polos</a></li>
                                           <li><a href="#">Pants &amp; Denim</a></li>
                                       </ul>
                                   </div>
                                   {/* <!-- End .widget-body --> */}
                               </div>
                               {/* <!-- End .collapse --> */}
                           </div>
                           {/* <!-- End .widget --> */}

                           <div class="widget">
                               <h3 class="widget-title">
                                   <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Price</a>
                               </h3>

                               <div class="collapse show" id="widget-body-3">
                                   <div class="widget-body">
                                       <form action="#">
                                           <div class="price-slider-wrapper">
                                               <div id="price-slider"></div>
                                               {/* <!-- End #price-slider --> */}
                                           </div>
                                           {/* <!-- End .price-slider-wrapper --> */}

                                           <div class="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                               <button type="submit" class="btn btn-primary">Filter</button>

                                               <div class="filter-price-text">
                                                   Price:
                                                   <span id="filter-price-range"></span>
                                               </div>
                                               {/* <!-- End .filter-price-text --> */}
                                           </div>
                                           {/* <!-- End .filter-price-action --> */}
                                       </form>
                                   </div>
                                   {/* <!-- End .widget-body --> */}
                               </div>
                               {/* <!-- End .collapse --> */}
                           </div>
                           {/* <!-- End .widget --> */}

                           <div class="widget">
                               <h3 class="widget-title">
                                   <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Size</a>
                               </h3>

                               <div class="collapse show" id="widget-body-4">
                                   <div class="widget-body">
                                       <ul class="cat-list">
                                           <li><a href="#">Small</a></li>
                                           <li><a href="#">Medium</a></li>
                                           <li><a href="#">Large</a></li>
                                           <li><a href="#">Extra Large</a></li>
                                       </ul>
                                   </div>
                                   {/* <!-- End .widget-body --> */}
                               </div>
                               {/* <!-- End .collapse --> */}
                           </div>
                           {/* <!-- End .widget --> */}

                           <div class="widget">
                               <h3 class="widget-title">
                                   <a data-toggle="collapse" href="#widget-body-5" role="button" aria-expanded="true" aria-controls="widget-body-5">Brand</a>
                               </h3>

                               <div class="collapse show" id="widget-body-5">
                                   <div class="widget-body">
                                       <ul class="cat-list">
                                           <li><a href="#">Adidas</a></li>
                                           <li><a href="#">Calvin Klein (26)</a></li>
                                           <li><a href="#">Diesel (3)</a></li>
                                           <li><a href="#">Lacoste (8)</a></li>
                                       </ul>
                                   </div>
                                   {/* <!-- End .widget-body --> */}
                               </div>
                               {/* <!-- End .collapse --> */}
                           </div>
                           {/* <!-- End .widget --> */}

                           <div class="widget">
                               <h3 class="widget-title">
                                   <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                               </h3>

                               <div class="collapse show" id="widget-body-6">
                                   <div class="widget-body">
                                       <ul class="config-swatch-list">
                                           <li class="active">
                                               <a href="#" style={{backgroundColor:" #1645f3;"}}></a>
                                               <span>Blue</span>
                                           </li>
                                           <li>
                                               <a href="#" style={{backgroundColor: "#f11010;"}}></a>
                                               <span>Red</span>
                                           </li>
                                           <li>
                                               <a href="#" style={{backgroundColor:" #fe8504;"}}></a>
                                               <span>Orange</span>
                                           </li>
                                           <li>
                                               <a href="#" style={{backgroundColor: "#2da819;"}}></a>
                                               <span>Green</span>
                                           </li>
                                       </ul>
                                   </div>
                                   {/* <!-- End .widget-body --> */}
                               </div>
                               {/* <!-- End .collapse --> */}
                           </div>
                           {/* <!-- End .widget --> */}
                       </div>
                       {/* <!-- End .sidebar-wrapper --> */}
                   </aside>
                   {/* <!-- End .col-lg-3 --> */}
               </div>
               {/* <!-- End .row --> */}
           </div>
           {/* <!-- End .container --> */}
       </main>
       {/* <!-- End .main --> */}

   </div>
   {/* <!-- End .page-wrapper --> */}
        </div>
    )
}
