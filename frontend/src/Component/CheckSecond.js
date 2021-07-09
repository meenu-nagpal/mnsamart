import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector ,useDispatch } from 'react-redux';

export default function CheckSecond() {
    let margin={
        paddingTop:"100px"
    }



const [firstname, setfirstname] = useState([])
const [lastname, setlastname] = useState([])
const [company, setcompany] = useState([])
const [streetaddress, setstreetaddress] = useState([])
const [city, setcity] = useState([])
const [zipcode, setzipcode] = useState([])
const [phonenumber, setphonenumber] = useState([])
const [country, setcountry] = useState([])
const [state, setstate] = useState([])



    function setValue(e){
        
  e.target.name=="firstname"&& setfirstname(e.target.value);
  e.target.name=="lastname"&& setlastname(e.target.value);
  e.target.name=="company"&& setcompany(e.target.value);
  e.target.name=="streetaddress"&& setstreetaddress(e.target.value);
  e.target.name=="city"&& setcity(e.target.value);
  e.target.name=="zipcode"&& setzipcode(e.target.value);
  e.target.name=="phonenumber"&& setphonenumber(e.target.value);
  e.target.name=="country"&& setcountry(e.target.value);
  e.target.name=="state"&&setstate(e.target.value);



    }

 


   // const selectedproduct = useSelector(state => state.selectedproduct);
    // console.log(selectedproduct)
    //      var h={...selectedproduct};
    
    //        h.product_id =selectedproduct._id
    //        console.log(h)
    // delete h._id
    // console.log(h)



    const z = useSelector(state =>state.shopingtocart);
console.log(z)


var mnsaUser=JSON.parse(localStorage.getItem("mnsaUser"))
console.log(mnsaUser)



    function sendData(){
var d = {
    firstname,lastname,company,streetaddress,city,zipcode,phonenumber,country,state,selected_product_details:z,mnsaUser:[mnsaUser]
}
console.log (d)

axios.post("http://localhost:9000/place_order",d).then((res)=>{
        console.log(res)
      })
    }
    return (
        <div>
             <div class="page-wrapper" style={margin}>
        
        {/* <!-- End .header --> */}

        <main class="main">

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Men</a></li>
                        <li class="breadcrumb-item"><a href="#">Accessories</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Classic Crew Neck Sweatshirt</li>
                    </ol>
                </div>
                {/* <!-- End .container --> */}
            </nav>

            <div class="page-header">
                <div class="container">
                    <h1>Checkout</h1>
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .page-header --> */}

            <div class="container">
             
                <div class="row row-sparse">
                    <div class="col-lg-4">
                        <div class="order-summary">
                            <h3>Summary</h3>

                            <h4>
                                <a data-toggle="collapse" href="#order-cart-section" class="collapsed" role="button" aria-expanded="false" aria-controls="order-cart-section">2 products in Cart</a>
                            </h4>

                            <div class="collapse" id="order-cart-section">
                                <table class="table table-mini-cart">
                                    <tbody>
                                        <tr>
                                            <td class="product-col">
                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
														<img src="assets/images/products/product-1.jpg" alt="product" />
													</a>
                                                </figure>
                                                <div>
                                                    <h2 class="product-title">
                                                        <a href="product.html">Running Sneakers</a>
                                                    </h2>

                                                    <span class="product-qty">Qty: 4</span>
                                                </div>
                                            </td>
                                            <td class="price-col">$17.90</td>
                                        </tr>

                                        <tr>
                                            <td class="product-col">
                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
														<img src="assets/images/products/product-2.jpg" alt="product" />
													</a>
                                                </figure>
                                                <div>
                                                    <h2 class="product-title">
                                                        <a href="product.html">Men's Apt</a>
                                                    </h2>

                                                    <span class="product-qty">Qty: 4</span>
                                                </div>
                                            </td>
                                            <td class="price-col">$7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- End #order-cart-section --> */}
                        </div>
                        {/* <!-- End .order-summary --> */}

                        <div class="checkout-info-box">
                            <h3 class="step-title">Ship To:
                                <a href="#" title="Edit" class="step-title-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                            </h3>

                            <address>
								Desmond Mason <br />
								123 Street Name, City, USA <br />
								Los Angeles, California 03100 <br /> 
								United States <br />
								(123) 456-7890
							</address>
                        </div>
                        {/* <!-- End .checkout-info-box --> */}

                        <div class="checkout-info-box">
                            <h3 class="step-title">Shipping Method:
                                <a href="#" title="Edit" class="step-title-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                            </h3>

                            <p>Flat Rate - Fixed</p>
                        </div>
                        {/* <!-- End .checkout-info-box --> */}
                    </div>
                    {/* <!-- End .col-lg-4 --> */}

                    <div class="col-lg-8 order-lg-first padding-right-lg">

                        <div class="checkout-payment">
                            <h2 class="step-title">Payment Method:</h2>

                            <h4>Check / Money order</h4>
                            <h3 class="text-primary">Step 1</h3>
                            <h5 class="card-title mb-4">Enter your shipping address</h5>

                            <div class="form-group-custom-control">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="change-bill-address" value="1" />
                                    <label class="custom-control-label" for="change-bill-address">My billing and shipping address are the same</label>
                                </div>
                                {/* <!-- End .custom-checkbox --> */}
                            </div>
                            {/* <!-- End .form-group --> */}

                            <div id="checkout-shipping-address">
                                <address>
									Desmond Mason <br />
									123 Street Name, City, USA <br />
									Los Angeles, California 03100 <br />
									United States <br />
									(123) 456-7890
								</address>
                            </div>
                            {/* <!-- End #checkout-shipping-address --> */}

                            <div id="new-checkout-address" class="show">
                                <form action="#">
                                    <div class="form-group required-field">
                                        <label>First Name </label>
                                        <input type="text"  name="firstname" onChange={(e)=>{setValue(e)}} value={firstname} class="form-control" required />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group required-field">
                                        <label>Last Name </label>
                                        <input type="text" name="lastname" onChange={(e)=>{setValue(e)}} value={lastname} class="form-control" required />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group">
                                        <label>Company </label>
                                        <input type="text"  name="company" onChange={(e)=>{setValue(e)}} value={company} class="form-control" />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group required-field">
                                        <label>Street Address </label>
                                        <input type="text"  name="streetaddress" onChange={(e)=>{setValue(e)}} value={streetaddress} class="form-control" required/>
                                        {/* <input type="text" class="form-control" required /> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group required-field">
                                        <label>City  </label>
                                        <input type="text"  name="city" onChange={(e)=>{setValue(e)}} value={city} class="form-control" required />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group">
                                        <label>State/Province</label>
                                        <input type="text"  name="state" onChange={(e)=>{setValue(e)}} value={state} class="form-control" required />

                                        {/* <div class="select-custom">
                                            <select class="form-control">
												<option value="CA">California</option>
												<option value="TX">Texas</option>
											</select>
                                        </div> */}
                                        {/* <!-- End .select-custom --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group required-field">
                                        <label>Zip/Postal Code </label>
                                        <input type="text"  name="zipcode" onChange={(e)=>{setValue(e)}} value={zipcode} class="form-control" required />
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group">
                                        <label>Country</label>
                                        <input type="text"  name="country" onChange={(e)=>{setValue(e)}} value={country} class="form-control" required />

                                        {/* <div class="select-custom">
                                            <select class="form-control">
												<option value="USA">United States</option>
												<option value="Turkey">Turkey</option>
												<option value="China">China</option>
												<option value="Germany">Germany</option>
											</select>
                                        </div> */}
                                        {/* <!-- End .select-custom --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group required-field">
                                        <label>Phone Number </label>
                                        <div class="form-control-tooltip">
                                            <input type="tel"  name="phonenumber" onChange={(e)=>{setValue(e)}} value={phonenumber} class="form-control" required />
                                            <span class="input-tooltip" data-toggle="tooltip" title="For delivery questions." data-placement="right"><i class="icon-question-circle"></i></span>
                                        </div>
                                        {/* <!-- End .form-control-tooltip --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}

                                    <div class="form-group-custom-control">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="address-save" />
                                            <label class="custom-control-label" for="address-save">Save in Address book</label>
                                        </div>
                                        {/* <!-- End .custom-checkbox --> */}
                                    </div>
                                    {/* <!-- End .form-group --> */}
                                </form>
                            </div>
                            {/* <!-- End #new-checkout-address --> */}


                            <hr class="my-4" />



                                            <div class="col-xxl-6 col-xl-8">
                                                <h3 class="text-primary">Step 2</h3>
                                                <h5 class="card-title mb-4">Enter your billing details</h5>
                                                <form>
                                                    <div class="row gx-3">
                                                        <div class="mb-3 col-md-6">
                                                            <label class="small mb-1" for="inputBillingName">Name on card</label>
                                                            <input class="form-control"  type="text" placeholder="Enter the name as it appears on your card" value="Valerie Luna" />
                                                        </div>
                                                        <div class="mb-3 col-md-6">
                                                            <label class="small mb-1" for="inputBillingCCNumber">Card number</label>
                                                            <input class="form-control"  type="text" placeholder="Enter your credit card number" value="4444 3333 2222 1111" />
                                                        </div>
                                                    </div>
                                                    <div class="row gx-3">
                                                        <div class="col-md-4 mb-4 mb-md-0">
                                                            <label class="small mb-1" for="inputOrgName">Card expiry month</label>
                                                            <input class="form-control" type="text" placeholder="Enter expiry month" value="06" />
                                                        </div>
                                                        <div class="col-md-4 mb-4 mb-md-0">
                                                            <label class="small mb-1" for="inputLocation">Card expiry year</label>
                                                            <input class="form-control"  type="text" placeholder="Enter expiry year" value="2024" />
                                                        </div>
                                                        <div class="col-md-4 mb-0">
                                                            <label class="small mb-1" for="inputLocation">CVV Number</label>
                                                            <input class="form-control"  type="password" placeholder="Enter CVV number" value="111" />
                                                        </div>
                                                    </div>
                                                    <hr class="my-4" />
                                                      
                                                </form>
                                            </div>



















                         
                            <div class="clearfix">
                            <button onClick={()=>{sendData()}}  class="btn btn-primary float-right">Place Order</button>
                               
                                {/* <a href="#"  class="btn btn-primary float-right">Place Order</a> */}
                            </div>
                            {/* <!-- End .clearfix --> */}
                        </div>
                        {/* <!-- End .checkout-payment --> */}

                        {/* <!-- End .checkout-discount --> */}
                    </div>
                    {/* <!-- End .col-lg-8 --> */}
                </div>
                {/* <!-- End .row --> */}
            </div>
            {/* <!-- End .container --> */}

            <div class="mb-6"></div>
            {/* <!-- margin --> */}
        </main>
        {/* <!-- End .main --> */}
</div>

        </div>
    )
}
