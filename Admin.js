import React,{useState} from 'react'
import axios from 'axios'
import{Link,NavLink, BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Tables from './Tables'
import RegistrationAk from './RegistrationAk'

function Admin() {
    const [cat_l1, setcat_l1] = useState([])
const [cat_name, setcat_name] = useState([])
const [cats_l3, setcats_l3] = useState([])
    function Inputhandler(e) {
    e.target.name=="cat_l1"&& setcat_l1(e.target.value);
    e.target.name=="cat_name"&& setcat_name(e.target.value);
    e.target.name=="cats_l3"&& setcats_l3(e.target.value);

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
//   function sububcathandler() {
//       alert("this is subsub cat handler")
//   }
    return (
        <div>
            <input name="cat_l1"  onChange={(e)=>{Inputhandler(e)}} placeholder="catergory" value={cat_l1}/> 
            <input name="cat_name" onChange={(e)=>{Inputhandler(e)}} placeholder="sub-catergory" value={cat_name}/> 
            <input name="cats_l3" onChange={(e)=>{Inputhandler(e)  } } placeholder="  sub-sub-catergory" value={cats_l3}/> 
<button onClick={()=>{categoryhandler()}}>create category</button>

<NavLink  to="/registrationAk"> category</NavLink>
<Route path="/registrationAk" exact component ={RegistrationAk}/>

        </div>
    )
}

export default Admin

