import axios from 'axios'
import React, { useState } from 'react'

export default function SignUp() {

    const [username, setusername] = useState([])
    const [firstname,setfirstname ] = useState([])
    const [lastname, setlastname] = useState([])
    const [orgzname, setorgzname] = useState([])
    const [location,setlocation ] = useState([])
    const [emailaddrs,setemailaddrs ] = useState([])
    const [phonenumbr, setphonenumbr] = useState([])
    





    function setValue(e) {
        e.target.name == "UserName" && setusername(e.target.value);
        e.target.name == "firstName" && setfirstname(e.target.value);
        e.target.name == "lastName" && setlastname(e.target.value);
        e.target.name == "orgzName" && setorgzname(e.target.value);
        e.target.name == "location" && setlocation(e.target.value);
        e.target.name == "emailaddrs" && setemailaddrs(e.target.value);
        e.target.name == "phonenumbr" && setphonenumbr(e.target.value);
        



    }


    function senddata() {
        alert("senddata")
        
    var mnsaUser=JSON.parse(localStorage.getItem("mnsaUser"))
console.log(mnsaUser._id)
var id=mnsaUser._id
console.log(id)
      var  Registration={username,firstname,lastname,orgzname,location,emailaddrs,phonenumbr
        
        }
        console.log(Registration);
        axios.post('http://localhost:9000/dashboard_register?id='+id,Registration).then(
            (res) => {
                console.log(res.data.msg)
              
            }
        )
      
    }


    




    return (
        <div>
            <div class="card-body">
                <div class="tab-content" id="cardTabContent"></div>
                <div class="tab-pane py-5 py-xl-10 fade show active" id="wizard1" role="tabpanel" aria-labelledby="wizard1-tab">
                    <div class="row justify-content-center">
                        <div class="col-xxl-6 col-xl-8">
                            <h5 class="card-title mb-4">Enter your account information</h5>
                            <form>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                    <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" name="UserName" onChange={(e) => { setValue(e) }} value={username} />
                                </div>
                                <div class="row gx-3">
                                    <div class="mb-3 col-md-6">
                                        <label class="small mb-1" for="inputFirstName">First name</label>
                                        <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" name="firstName" onChange={(e) => { setValue(e) }} value={firstname} />
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="small mb-1" for="inputLastName">Last name</label>
                                        <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" name="lastName" onChange={(e) => { setValue(e) }} value={lastname} />
                                    </div>
                                </div>
                                <div class="row gx-3">
                                    <div class="mb-3 col-md-6">
                                        <label class="small mb-1" for="inputOrgName">Organization name</label>
                                        <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" name="orgzName" onChange={(e) => { setValue(e) }} value={orgzname} />
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="small mb-1" for="inputLocation">Location</label>
                                        <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" name="location" onChange={(e) => { setValue(e) }} value={location} />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name="emailaddrs" onChange={(e) => { setValue(e) }} value={emailaddrs} />
                                </div>
                                <div class="row gx-3">
                                    <div class="col-md-6 mb-md-0">
                                        <label class="small mb-1" for="inputPhone">Phone number</label>
                                        <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name="phonenumbr" onChange={(e) => { setValue(e) }} value={phonenumbr} />
                                    </div>
                                    {/* <div class="col-md-6 mb-0">
                                        <label class="small mb-1" for="inputBirthday">Birthday</label>
                                        <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" name="birthday" onChange={(e) => { setValue(e) }} value={birthday} />
                                    </div> */}
                                </div>
                                <hr class="my-4" />
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-primary" type="button" onClick={() => { senddata() }}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
