import React from 'react'
// import {  Switch, Link, Route, BrowserRouter as Router, NavLink  } from 'react-router-dom';
import{ useState,useEffect} from 'react';
import axios from 'axios';
import { useSelector ,useDispatch } from 'react-redux';
import { CreateUser} from '../Actions/UserAction';

 export function SignUp(props) {

     const [password, setpassword] = useState("");
     const [email, setemail] = useState("");
     const [mobile, setmobile] = useState("");
     const [username, setusername] = useState("")
     
    // var stId= props.match.params.id;
    const dispatch = useDispatch()

    
     function setValue(e){
    e.target.name=="Email"&& setemail(e.target.value);
    e.target.name=="password"&& setpassword(e.target.value);
    e.target.name=="Mobile"&& setmobile(e.target.value);
    e.target.name=="UserName"&& setusername(e.target.value);

   
     }
     function sendData(){
         var s = {
             email,password,mobile,username
         }
         console.log (s);
         dispatch(CreateUser(s))

        // axios.post("http://localhost:9000/create_user",s).then((res)=>{
        // })
    
     }
    return (
        <div>
              <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">SignUp</h3></div>
                                    <div class="card-body">
                                        <form>
                                            

                                        <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">username</label>
                                                <input class="form-control py-4" name="UserName" onChange={(e)=>{setValue(e)}} value={username}  id="inputEmailAddress" type="text" placeholder="username" />
                                                </div>

                                                <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">Email</label>
                                                <input class="form-control py-4" name="Email" onChange={(e)=>{setValue(e)}} value={email}  id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                                </div>

                                                <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">mobile </label>
                                                <input class="form-control py-4" name="Mobile" onChange={(e)=>{setValue(e)}} value={mobile}  id="inputEmailAddress" type="email" placeholder="Enter mobile no" />
                                                </div>



                                                <div class="form-group">
                                                <label class="small mb-1" for="inputname">password</label>
                                                <input class="form-control py-4" name="password" onChange={(e)=>{setValue(e)}} value={password} id="inputname" type="email" placeholder="password" />
                                                </div>
                                                
                                           
                                            <div class="form-group">
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a class="btn btn-primary"  onClick={sendData}>sign up </a>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default SignUp
