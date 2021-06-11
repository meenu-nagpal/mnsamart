var express = require('express');
var cors = require('cors');
// var bodyParser = require('body-parser');
var dbconfig = require("./mongodbConfig");
var ObjectId = require('mongodb').ObjectID;

var upload = require('./multerConfig');


var path = require('path');

var app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,'uploads')));


app.get('/list-student', (req,res)=>{
    var studentCollection = dbconfig.dbcon.db('mnsa').collection('aksh');
    studentCollection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok", data:docs});
    
        }
        else{
            res.send({status:"failed", data:err});
        }
    })
    });

app.post('/uploadfiles', (req,res)=>{
    upload(req,res,(err)=>{
        if (err) {
            console.log("Error Occured during upload ");
            console.log(err);
            res.send({status:"failed", data:err});
        }
        else{
            var studentCollection = dbconfig.dbcon.db('mnsa').collection('aksh');
            console.log("files",req.files);
            console.log("line 47");
            
            console.log(req.body);
            var stdocs = {
                profile:req.files.profile[0].filename,
                resume:req.files.resume[0].filename,
                certificates:req.files.certificates.map(c=>c.filename)
            }
            
           
            studentCollection.update({_id:ObjectId(req.body.studentId)},{$set:{documents:stdocs}},(err,result)=>{
                if(!err)
                {

                    res.send({status:"success", data:"files uploaded sucessfully"});
                }
                else{
                    res.send({status:"failed", data:err});

                }
            })
        }
    });
})

app.listen(4000, ()=>{
    console.log("Server is started on port 4000");
})

