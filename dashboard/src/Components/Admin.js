import React,{useState} from 'react'
import axios from 'axios'


function Admin() {


    const [cat_l1, setcat_l1] = useState([])
const [cat_name, setcat_name] = useState([])
const [cats_l3, setcats_l3] = useState([])




    function Inputhandler(e) {
        console.log(e.target.value)
    e.target.name=="cat_l1"&& setcat_l1(e.target.value);
    e.target.name=="cat_name"&& setcat_name(e.target.value);







        
    }


    function Handler (e){
console.log(e)

        var store=[]
        console.log(store)

        //    e.target.name=="cats_l3"&& setcats_l3(e.target.value);

  
        var hgf=store.push(e.target.value)
  setcats_l3(store);
    }


 

    function categoryhandler() {
        alert("created")
        alert(cat_name)
        alert(cat_l1)
        alert(cats_l3)


        var c= {
            cat_name,cat_l1,cats_l3
        }
        axios.post("http://localhost:9000/create_category",c).then(()=>{

        })
    }









    return (
        <div>
           


<div class="card-body">
                <div class="tab-content" id="cardTabContent"></div>
                <div class="tab-pane py-5 py-xl-10 fade show active" id="wizard1" role="tabpanel" aria-labelledby="wizard1-tab">
                    <div class="row justify-content-center">
                        <div class="col-xxl-6 col-xl-8">
                            <h5 class="card-title mb-4">Create a Category</h5>
                            <form>
                                <div class="mb-3">
                                    <label class="small mb-1" >Main Category</label>
                                    <input class="form-control"  type="text" name="cat_l1"  onChange={(e)=>{Inputhandler(e)}} placeholder="catergory" value={cat_l1} />
                                   
                                   
                                   
                                </div>
                              
                            
                                <div class="mb-3">
                                    <label class="small mb-1" >Sub-Category</label>
                                    <input class="form-control"  type="text" name="cat_name" onChange={(e)=>{Inputhandler(e)}} placeholder="sub-catergory" value={cat_name}/>

                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1">Sub-Sub-Category</label>
                                    <input class="form-control" type="text"   name="cats_l3" onChange={(e)=>{Handler(e)  } } placeholder="  sub-sub-catergory" value={cats_l3}/>
                                </div>
                             
                                <hr class="my-4" />
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-primary" type="button" onClick={()=>{categoryhandler()}}>Create Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Admin

