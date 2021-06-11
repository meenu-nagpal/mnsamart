import React, { useState,useEffect } from 'react'
import axios from 'axios';
function StudentDocument() {

    var profile;
    var resume;
    var certificates;
    var baseUrl = "http://localhost:4000/";
   

    const [studentId, setstudentId] = useState("")
    const [students, setstudents] = useState([])
    const [fileInProgress, setfileInProgress] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")


    useEffect(() => {
        console.log("in use effect of student Document");
        axios.get(baseUrl+'list-student').then(
            (res)=>{
                console.log("students List in Student Document");
                 console.log(res.data.data);
                setstudents(res.data.data);
            }
        ).catch((err)=>{alert("some error-->"+JSON.stringify(err))});
        
    }, []);



    function setValue(event)
    {
        event.target.name == "profile" && (profile= event.target.files[0]);
        event.target.name == "resume" && (resume= event.target.files[0]);
        event.target.name == "certificates" && (certificates= event.target.files);
        event.target.name == "studentId" && (setstudentId(event.target.value));
    }
    

    function sendData()
    {
            var  formData = new FormData();           
            formData.append("profile",profile);
            formData.append("resume",resume);
            formData.append("studentId",studentId);
            for(var f of certificates)
            {
                formData.append("certificates",f);
            }

            axios.post(baseUrl+"uploadfiles",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function( progressEvent ) {
                    console.log("file Uploading Progresss.......");
                    console.log(progressEvent);
                  setuploadPercentage( parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )));
                //   setfileInProgress(progressEvent.fileName)
                }
              }).then((res)=>{
                  alert(res);
              }).catch(res=>{
                alert("sorry you are not authorised to do this action");
            });
              
    }

    var studentList = students.map((st)=>{
        return   <option key={st._id} value={st._id} >      {st.name}  ({st.email})       
                 </option>
      })


    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form>
                            
                           
                            <div class="form-group">
                                                <label class="small mb-1" for="inputStudentId">Select Student </label>
                                                <select name="studentId" value={studentId} onChange={(e)=>{ setValue(e);  }} class="form-control" id="inputStudentId"  >
                                                   {studentList}
                                                </select>
                                            </div>   
                            <div class="form-group">
                                <label class="small mb-1" for="inputProfile">profile</label>
                                <input name="profile" type="file" onChange={(e)=>{ setValue(e);  }} class="form-control py-4" id="inputProfile" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputresume">resume</label>
                                <input name="resume" type="file" onChange={(e)=>{ setValue(e);  }} class="form-control py-4" id="inputresume" />
                            </div>
                            <div class="form-group">
                                 <label class="small mb-1" for="inputcertificates">certificates</label>
                                   <input name="certificates" type="file" multiple onChange={(e)=>{ setValue(e);  }} class="form-control py-4" id="inputcertificates" />
                             </div>
                                                                
                           
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                <a class="btn btn-primary" onClick={sendData}> Upload documents</a>
                                {uploadPercentage} % uploaded...
                            </div>
                        </form>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
    )
}

export default StudentDocument
