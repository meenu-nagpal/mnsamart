import './Login.css'
import $ from 'jquery'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector ,useDispatch } from 'react-redux';
import { CreateUser } from '../Actions/TodoActions';








export default function Login() {

  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [username, setusername] = useState("")
  
 const dispatch = useDispatch()

 
 function setValue(e){
  e.target.name=="Email"&& setemail(e.target.value);
  e.target.name=="password"&& setpassword(e.target.value);
  e.target.name=="Mobile"&& setmobile(e.target.value);
  e.target.name=="UserName"&& setusername(e.target.value);

 
   }
   function sendData(){
     alert("senddata")
       var s = {
           email,password,mobile,username
       }
       console.log (s);
       dispatch(CreateUser(s))

      // axios.post("http://localhost:9000/create_user",s).then((res)=>{
      // })
  
   }



console.log(password)
console.log(username)
console.log(email)
console.log(mobile)








useEffect(() => {
  $(document).ready(function(){
    $(".login").hide();
    $(".register_li").addClass("active");

    $(".login_li").click(function(){
      $(this).addClass("active");
      $(".register_li").removeClass("active");
      $(".login").show();
       $(".register").hide();
    })

    $(".register_li").click(function(){
      $(this).addClass("active");
      $(".login_li").removeClass("active");
      $(".register").show();
       $(".login").hide();
    })
});
 
}, [])




  return (
    <div>
         <div class="wrapper">
  <div class="left">
      <h3>Rocket Station</h3>   
    <img src="https://i.imgur.com/eN4AKys.png" alt="Rocket_image"/>
  </div>
  <div class="right">
    <div class="tabs">
      <ul>
        <li class="register_li">Register</li>
        <li class="login_li">login</li>
      </ul>
    </div>
    
    <div class="register">
      <div class="input_field">

        <input type="text" name="UserName" onChange={(e)=>{setValue(e)}} value={username} placeholder="Username" class="input" />
      </div>
      <div class="input_field">
        <input type="text" name="Mobile" onChange={(e)=>{setValue(e)}} value={mobile} placeholder="Mobile Number" class="input" />
      </div>
      <div class="input_field">
        <input type="text"  name="Email" onChange={(e)=>{setValue(e)}} value={email} placeholder="E-mail" class="input" />
      </div>
      <div class="input_field">
        <input type="password" name="password" onChange={(e)=>{setValue(e)}} value={password} placeholder="Password" class="input" />
      </div>
      <div class="btn"  onClick={sendData}><a href="#">Register</a></div>
    </div>
    
    <div class="login">
      <div class="input_field">
        <input type="text" placeholder="E-mail" class="input" />
      </div>
      <div class="input_field">
        <input type="password" placeholder="Password" class="input" />
      </div>
      <div class="btn"><a href="#">Login</a></div>
    </div>
    
  </div>
</div>
    </div>
  )
}
