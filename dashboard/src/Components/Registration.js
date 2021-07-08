import './Registration.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


var mainimage;
var multipleimage;



export default function Registration() {

    const [category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [SubSubCategory, setSubSubCategory] = useState([])


    const [qty, setqty] = useState([])
    const [price, setprice] = useState([])
    const [discount, setdiscount] = useState([])


    const [store, setStore] = useState([])
    const [storesec, setStoreSec] = useState([])
    const [storethree, setStoreThree] = useState([])



    const  [productbrand,setProductBrand]=useState([])
    const [productbrandtitle,setProductBrandTitle]=useState([])
    const [ des,setDes]=useState([])
     






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
    console.log(cat);

    let unique = [...new Set(cat)];
    console.log(unique);

    var uniquecat = unique.map((k) => {
        console.log(k)
        return (<li><button value={k} onClick={(e) => { Handler(e.target.value); setStore(e.target.value) }}>{k}</button></li>)
    })
    console.log(uniquecat)




    function Handler(k) {
        console.log(`${k}`)
        var catklm = category.filter((ct) => {

            if (k == ct.cat_l1) { return true }
        })

        let uniquesec = [...new Set(catklm.map((k) => k.cat_name))];

        var h = uniquesec.map((p) => {
            return (<li><button value={p} onClick={(f) => { SubCategoryhandler(f.target.value); setStoreSec(f.target.value) }}>{p}</button></li>)

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

            return (<li><button value={m} onClick={(f) => { setStoreThree(f.target.value) }}>{m}</button></li>)

        })


        setSubSubCategory(catsl3)
    }



    // start multer


    var baseUrl = "http://localhost:9000/";



 
    const [products, setProduct] = useState("")

    const [imagess, setImage] = useState("")
    const [imagesec, setImageSec] = useState("")
    const [imagesthree, setImageThree] = useState("")







    function showImage(event) {
        mainimage = event.target.files[0]
        setProduct(URL.createObjectURL(mainimage))
        console.log(mainimage);
    }


    function showsMultiple(event) {
        multipleimage = event.target.files;
        setImage(URL.createObjectURL(multipleimage[0]))
        setImageSec(URL.createObjectURL(multipleimage[1]))
        setImageThree(URL.createObjectURL(multipleimage[2]))
        console.log(multipleimage);
    }





    function setValue(event) {
        event.target.name == "qty" && setqty(event.target.value);
        event.target.name == "price" && setprice(event.target.value);
        event.target.name == "discount" && setdiscount(event.target.value);
        event.target.name == "productbrand" && setProductBrand(event.target.value);
        event.target.name == "productbrandtitle" && setProductBrandTitle(event.target.value);
        event.target.name == "des" && setDes(event.target.value);
     

    }






    function sendData() {

        alert("senddata")
        var formData = new FormData();


        formData.append("store", store)
        formData.append("storesec", storesec)
        formData.append("storethree", storethree)

        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("qty", qty);
        formData.append("vendor", localStorage.getItem("mnsaUser"));
    
        formData.append("productbrand",productbrand);
        formData.append("productbrandtitle",productbrandtitle);
        formData.append("des",des);





        formData.append("mainimage", mainimage);

        console.log(mainimage)
        console.log(multipleimage)
        for (var f of multipleimage) {

            formData.append("multipleimage", f);

        }


        console.log(formData)
        axios.post(baseUrl + "uploadfiles", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        }).then((res) => {
            alert(res);
        }).catch(res => {
            alert("sorry you are not authorised to do registration.js this action");
        });
    }



    return (
        <div>

            <div class="gap no-gap">
                <div class="inner-bg">
                    <div class="element-title">
                        <h4>about product</h4>
                        <span>Please fill the form bellow.</span> </div>

                      

                    <div class="add-prod-from">
                        <div class="row">
                    

                            <div class="col-md-6">
                                <label>Product Category</label>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Product Category</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                        {uniquecat}
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-6">
                                <label>Product Sub Category</label>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Product Sub Category</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {SubCategory}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label>Product</label>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {SubSubCategory}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label>Product Brand</label>
                                <input type="text" placeholder="Product Brand" name="productbrand" onChange={(e) => { setValue(e) }}  />


                            </div>
                            <div class="col-md-6">
                                <label>Product Brand Title</label>
                                <input type="text" placeholder="Product Brand Title" name="productbrandtitle" onChange={(e) => { setValue(e) }} />


                            </div>
                            <div class="col-md-6">
                                <label>Product Quantity</label>
                                <input type="text" placeholder="Product Quantity" onChange={(e) => { setValue(e) }} name="qty" />


                            </div>
                          
                            <div class="col-md-6">
                                <div class="input-group">
                                    <label>price</label>
                                    <span class="input-group-addon"><i class="fa fa-dollar"></i></span>
                                    <input class="form-control" placeholder="$20" type="text" onChange={(e) => { setValue(e) }} name="price" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <label>discount</label>
                                    <span class="input-group-addon"><i class="fa fa-percent"></i></span>
                                    <input class="form-control" placeholder="5%" type="text" onChange={(e) => { setValue(e) }} name="discount" />
                                </div>
                            </div>

                            <div class="col-md-12"> <span class="upload-image">upload main image</span>
                                <label class="fileContainer" >
                                    <span >upload  </span>

                                    <input name="mainimage" type="file" onChange={(e) => { showImage(e) }} />


                                </label>

                            </div>
                            <div style={{ height: "100px", width: "100px", border: "2px solid black ", }}><img src={products} style={{ height: "100px", width: "100px", border: "2px solid black ", overFlow: "hidden" }} /></div>


                            <div class="col-md-12"> <span class="upload-image">upload multiple image</span>
                                <label class="fileContainer" > <span>upload</span>

                                    <input name="multipleimage" multiple onChange={(e) => { showsMultiple(e); }} type="file" />
                                </label>

                            </div>
                            <div style={{ height: "100px", width: "100px", border: "2px solid black ", }}><img src={imagess} style={{ height: "100px", width: "100px", border: "2px solid black ", overFlow: "hidden" }} /></div>
                            <div style={{ height: "100px", width: "100px", border: "2px solid black ", }}><img src={imagesec} style={{ height: "100px", width: "100px", border: "2px solid black ", overFlow: "hidden" }} /></div>
                            <div style={{ height: "100px", width: "100px", border: "2px solid black ", }}><img src={imagesthree} style={{ height: "100px", width: "100px", border: "2px solid black ", overFlow: "hidden" }} /></div>



                            <div class="col-md-12">
                                <label>Product Description</label>
                                <textarea cols="30" rows="10" placeholder="loram ipsum dolor sit amit" name="des" onChange={(e) => { setValue(e); }} ></textarea>
                            </div>
                           
                            <div class="col-md-6">
                                <div class="buttonz">

                                    <button type="submit" onClick={() => { sendData(); }}>submit</button>

                                    <button type="submit">cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




