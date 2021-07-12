import './Login.css'
import $ from 'jquery'
import React, { useEffect, useState } from 'react'
import axios from 'axios';







export default function Login(props) {


  

  const [loginpassword, setloginpassword] = useState([]);
  const [loginemail, setloginemail] = useState([]);



 
 function setValue(e){
 


  e.target.name=="loginEmail"&& setloginemail(e.target.value);
  e.target.name=="loginpassword"&& setloginpassword(e.target.value);

 
   }


   

  
   function loginsenddata(){
     alert("this is login send data")
     var d = {
      loginemail,loginpassword
     }
      console.log(d)
     

      axios.post("http://localhost:9000/login",d).then(
        (res) => {
        console.log(res)
        console.log(res.data.msg[0]._id)
        if (res=true){
          axios.get('http://localhost:9000/create_user').then(
            (res) => {
                console.log(res)
            }
        )
        }
       
        }
    ).catch(res => {
        alert("sorry you got an error from useractions  create student  api");
        })



   
  }














  return (
    <div>

         <div class="wrapper">
   
  <div class="left">
      <h3>Rocket Station</h3>   
    <img src="https://i.imgur.com/eN4AKys.png" alt="Rocket_image"/>
  </div>
  <div class="right">

    
   

    
    <div class="login">
      <div class="input_field">
        <input type="email"  name="loginEmail" onChange={(e)=>{setValue(e)}} value={loginemail} placeholder="E-mail" class="input" />

      </div>
      <div class="input_field">
        <input type="password" name="loginpassword" onChange={(e)=>{setValue(e)}} value={loginpassword} placeholder="Password" class="input" />


      </div>
      <div class="btn" onClick={()=>{loginsenddata()}}>Login</div>
    </div>
    
  </div>
</div>
    </div>
  )
}
