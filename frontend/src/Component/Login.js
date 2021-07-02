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
  

  const [loginpassword, setloginpassword] = useState("");
  const [loginemail, setloginemail] = useState("");


 const dispatch = useDispatch()

 
 function setValue(e){
  e.target.name=="Email"&& setemail(e.target.value);
  e.target.name=="password"&& setpassword(e.target.value);
  e.target.name=="Mobile"&& setmobile(e.target.value);
  e.target.name=="UserName"&& setusername(e.target.value);


  e.target.name=="loginEmail"&& setloginemail(e.target.value);
  e.target.name=="loginpassword"&& setloginpassword(e.target.value);

 
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



   function loginsenddata(){
     alert("this is login send data")
     var d = {
       loginemail,loginpassword
     }
      console.log(d)
      axios.get("http://localhost:9000/login",d).then((res)=>{
        console.log(res.data.msg)
        console.log(res.data.msg2)
        alert(res.data.msg2)
      })
   }

console.log(password)
console.log(username)
console.log(email)
console.log(mobile)
console.log(loginpassword)
console.log(loginemail)







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
        <input type="email"  name="Email" onChange={(e)=>{setValue(e)}} value={email} placeholder="E-mail" class="input" />
      </div>
      <div class="input_field">
        <input type="password" name="password" onChange={(e)=>{setValue(e)}} value={password} placeholder="Password" class="input" />
      </div>
      <div class="btn"  onClick={sendData}>Register</div>
    </div>
    
    <div class="login">
      <div class="input_field">
        {/* <input type="text" placeholder="E-mail" class="input" /> */}
        <input type="email"  name="loginEmail" onChange={(e)=>{setValue(e)}} value={loginemail} placeholder="E-mail" class="input" />

      </div>
      <div class="input_field">
        {/* <input type="password" placeholder="Password" class="input" /> */}
        <input type="password" name="loginpassword" onChange={(e)=>{setValue(e)}} value={loginpassword} placeholder="Password" class="input" />

      </div>
      <div class="btn" onClick={()=>{loginsenddata()}}>Login</div>
    </div>
    
  </div>
</div>
    </div>
  )
}
