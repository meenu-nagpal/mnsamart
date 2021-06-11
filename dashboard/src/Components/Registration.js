import './Regis.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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


    var image;
    var baseUrl = "http://localhost:9000/";


    const [studentId, setstudentId] = useState("")
    const [students, setstudents] = useState([])
    const [fileInProgress, setfileInProgress] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")


    useEffect(() => {
        console.log("in use effect of student Document");
        axios.get(baseUrl + 'list-student').then(
            (res) => {
                console.log("students List in Student Document");
                console.log(res.data.data);
                setstudents(res.data.data);
            }
        ).catch((err) => { alert("some error-->" + JSON.stringify(err)) });

    }, []);



    function setValue(event) {
        event.target.name == "qty" && setqty(event.target.value);
        event.target.name == "price" && setprice(event.target.value);
        event.target.name == "discount" && setdiscount(event.target.value);
        event.target.name == "image" && (image = event.target.files);
        event.target.name == "studentId" && (setstudentId(event.target.value));
    }


    function sendData() {


        var formData = new FormData();


        formData.append("store", store)
        formData.append("storesec", storesec)
        formData.append("storethree", storethree)

        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("qty", qty);


        for (var f of image) {
            formData.append("image", f);
        }

        axios.post(baseUrl + "uploadfiles", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                console.log("file Uploading Progresss.......");
                console.log(progressEvent);
                setuploadPercentage(parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
                setfileInProgress(progressEvent.fileName)
            }
        }).then((res) => {
            alert(res);
        }).catch(res => {
            alert("sorry you are not authorised to do this action");
        });

    }




    // end



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
                                <label>Product Quantity</label>
                                <input type="text" placeholder="Product Quantity" onChange={(e) => { setValue(e) }} name="qty" />


                            </div>
                            <div class="col-md-12">
                                <label>Status</label>
                                <input type="radio" name="status" />
                                <label>Published</label>
                                <input type="radio" name="status" />
                                <label>draft</label>
                                <input type="radio" name="status" />
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

                            <div class="col-md-12"> <span class="upload-image">upload image</span>
                                <label class="fileContainer" > <span>upload</span>
                                    <input name="image" type="file" multiple onChange={(e) => { setValue(e); }} type="file" />
                                </label>

                            </div>

                            <div class="col-md-12"> <span class="upload-image">upload image</span>
                                <label class="fileContainer" > <span>upload</span>
                                    <input name="image" type="file" multiple onChange={(e) => { setValue(e); }} type="file" />
                                </label>

                            </div>



                            <div class="col-md-12">
                                <label>Product Description</label>
                                <textarea cols="30" rows="10" placeholder="loram ipsum dolor sit amit"></textarea>
                            </div>
                            <div class="col-md-6">
                                <label>Organization Name</label>
                                <input type="text" placeholder="any title" />
                            </div>
                            <div class="col-md-6">
                                <label>Meta Keyword</label>
                                <input type="text" placeholder="any key" />
                            </div>

                            <div class="col-md-6">
                                <label>type</label>
                                <input type="text" placeholder="leather" />
                            </div>
                            <div class="col-md-6">
                                <label>style</label>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Style</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="buttonz">

                                    <button type="submit" onClick={() => { sendData() }}>submit</button>


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




