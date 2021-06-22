import React,{useState} from 'react'
import axios from 'axios'
import{Link,NavLink, BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Tables from './Tables'
// import Registration from './Registration'

function Admin() {


    const [cat_l1, setcat_l1] = useState([])
const [cat_name, setcat_name] = useState([])
const [cats_l3, setcats_l3] = useState([])




    function Inputhandler(e) {
        console.log(e.target.value)
    e.target.name=="cat_l1"&& setcat_l1(e.target.value);
    e.target.name=="cat_name"&& setcat_name(e.target.value);
        //    e.target.name=="cats_l3"&& setcats_l3(e.target.value);







        
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
            <input     name="cat_l1"  onChange={(e)=>{Inputhandler(e)}} placeholder="catergory" value={cat_l1}/> 
            <input    name="cat_name" onChange={(e)=>{Inputhandler(e)}} placeholder="sub-catergory" value={cat_name}/> 
            <input    name="cats_l3" onChange={(e)=>{Handler(e)  } } placeholder="  sub-sub-catergory" value={cats_l3}/> 
<button onClick={()=>{categoryhandler()}}>create category</button>

{/* <NavLink  to="/registration"> category</NavLink>
<Route path="/registration" exact component ={Registration}/> */}

        </div>
    )
}

export default Admin

