
var express= require('express');
var mongoclient = require('Mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectID;
var cors = require ('cors')
var body_parser = require('body-parser');
var upload = require('./multerConfig');
var path = require('path');

var app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname,'uploads')));
var path = require('path');

var connection;


app.get('/',(req,res) =>{
    res.send({msg:"hii" })  
})

var Mongoobj= new mongoclient ("mongodb+srv://mnsamart:mnsamart@cluster0.ykr9g.mongodb.net/category?retryWrites=true&w=majority",
{useNewUrlParser:true});
Mongoobj.connect((err,db)=>{
    if(!err){
        connection = db;
    }
    else{
        console.log("database could not connected sucessfully");
    }
})



  

app.get('/category',(req,res)=>{
    var col = connection.db('mnsa').collection('category');
    col.find().toArray((error, data)=>{
        if(!error){
            res.send({
                status:"ok",
                data:data
            })
        }
            else{
                res.send({
                    status:"failed",
                    data:error
                
                })
            }
        
    })
})


app.post('/create_category',body_parser.json(),(req,res)=>{
    console.log(req.body)
    var col = connection.db('mnsa').collection('category');
    col.insert(req.body,(error,result)=>{
     if(!error){
         res.send({
             status:"ok",
             data:result
         })   
         
     }
         else{
             res.send({
                 status:"failed",
                 data:error
             })
         }
     
     })
 })


 app.get('/product',(req,res)=>{
    var col = connection.db('mnsa').collection('product');
    col.find().toArray((error, data)=>{
        if(!error){
            res.send({
                status:"ok",
                data:data
            })
        }
            else{
                res.send({
                    status:"failed",
                data:error
                
                })
            }
        
    })
})

 app.post('/create_product',body_parser.json(),(req,res)=>{
    console.log(req.body)
    var col = connection.db('mnsa').collection('product');
    col.insert(req.body,(error,result)=>{
     if(!error){
         res.send({
             status:"ok",
             data:result
         })   
         
     }
         else{
             res.send({
                 status:"failed",
                 data:error
             })
         }
     
     })
 })


//  app.post('/uploadfiles',body_parser.json(), (req,res)=>{
//     upload(req,res,(err)=>{
//         if (err) {
//             console.log("Error Occured during upload ");
//             console.log(err);
//             res.send({status:"failed", data:err});
//         }
//         else{
//             var col = connection.db('mnsa').collection('product');
//             console.log("files",req.files);
//             console.log("line 47");
            
//             console.log(req.body);
            
//             col.insert(req.files,(error,result)=>{
//                 if(!error){
//                     res.send({
//                         status:"ok",
//                         data:result
//                     })   
                    
//                 }
//                     else{
//                         res.send({
//                             status:"failed",
//                             data:error
//                         })
//                     }
                
//                 })
           
            
//         }
//     });
// })





app.get('/list-student', (req,res)=>{
    var studentCollection = dbconfig.dbcon.db('mnsa').collection('product');
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
            var studentCollection = connection.db('mnsa').collection('product');
            console.log("files",req.files);
            console.log("line 47");
            
            console.log(req.body);
            var stdocs = {
                // profile:req.files.profile[0].filename,

                qty:req.files.qty[0].filename,
                price:req.files.price[0].filename,
                discount:req.files.discount[0].filename,

                producimages:req.files.productimages.map(c=>c.filename)
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



// app.get('/studentby_id',(req,res)=>{
//     var col = connection.db('school').collection('student');
//     col.find( {_id:ObjectId(req.query.id)}).toArray((error, data)=>{
//         if(!error){
//             res.send({
//                 status:"ok",
//                 msg:data
//             })
//         }
//             else{
//                 res.send({
//                     status:"failed",
//                     msg:error
//                 })
//             }
        
//     })
// })

// app.get('/create_student',(req,res)=>{
//    console.log( req.query)
//    var col = connection.db('school').collection('student');
//    col.insert(req.query,(error,result)=>{
//     if(!error){
//         res.send({
//             status:"ok",
//             msg:result
//         })
//     }
//         else{
//             res.send({
//                 status:"failed",
//                 msg:error
//             })
//         }
    
//     })
// })




//  app.post('/update_student',body_parser.json(),(req,res)=>{
//     console.log(req.body)
//     var col = connection.db('school').collection('student');
//     col.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.name,con:req.body.con,marks:req.body.marks}},(error,result)=>{
//      if(!error){
//          res.send({
//              status:"ok",
//              msg:result
//          })   
         
//      }
//          else{
//              res.send({
//                  status:"failed",
//                  msg:error
//              })
//          }
     
//      })
//  })

app.listen(9000, ()=>{
    console.log("listening on port 9000")
})