import './Registration.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function RegistrationAk() {

    const [category, setCategory] = useState([]);
const [SubCategory, setSubCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/category').then(
            (res) => {
                console.log(res)
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


    function Getvalue(e) {
        console.log(`${e}`)
        var catklm = category.filter((ct) => {
            if (e == ct.cat_l1) { return true }
        }).map((p)=>{
            // return p.cat_name
            return(<li><button  value ={p.cat_name} onClick={(f)=>{SubCategoryhandler(f.target.value)}}>{p.cat_name}</button></li>)
        })
        console.log(catklm)
        setSubCategory(catklm)
    }
    function SubCategoryhandler(f){
        console.log("this is subcategory handler")
        console.log(`${f}`)
        // var catklm = category.filter((ct) => {
        //     if (f == ct.cat_l1) { return true }
        // }).map((p)=>{
        //     // return p.cat_name
        //     return(<li><button onClick={()=>{SubCategoryhandler()}}>{p.cat_l3}</button></li>)
        // })
        // console.log(catklm)
        // setSubCategory(catklm)

    }
    console.log(SubCategory)
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
                                        {/* <button value={category[0].cat_name} onClick={(e)=>{Getvalue(e.target.value)}} style={{border:"none"}}>{unique[0]}</button> <br/> */}
                                        <button value={unique[0]} onClick={(e) => { Getvalue(e.target.value) }} style={{ border: "none" }}>{unique[0]}</button> <br />

                                        <button value={unique[1]} onClick={(e) => { Getvalue(e.target.value) }}>{unique[1]}</button><br />
                                        <button>{unique[2]}</button><br />
                                        <button>{unique[3]}</button><br />



                                    </div>
                                </div>


                                {/* <input type="text" placeholder="Men's watch" /> */}
                            </div>
                            <div class="col-md-6">
                                <label>Product Sub Category</label>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Product Sub Category</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    
                                    {/* <button value={t[0]} onClick={(e) => { Getvalue(e.target.value) }} style={{ border: "none" }}>{t[0]}</button> <br /> */}
                                       {SubCategory}
                                        {/* <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <a class="dropdown-item" href="#!">Something else here</a> */}
                                    </div>
                                </div>
                                {/* <input type="text" placeholder="leather" /> */}
                            </div>
                            <div class="col-md-6">
                                <label>Product</label>

                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label>Product Quantity</label>
                                <input type="text" placeholder="Product Quantity" />


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
                                    <input class="form-control" placeholder="$20" type="text" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <label>discount</label>
                                    <span class="input-group-addon"><i class="fa fa-percent"></i></span>
                                    <input class="form-control" placeholder="5%" type="text" />
                                </div>
                            </div>

                            <div class="col-md-12"> <span class="upload-image">upload image</span>
                                <label class="fileContainer"> <span>upload</span>
                                    <input type="file" />
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
                                    <button type="submit">save</button>
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




