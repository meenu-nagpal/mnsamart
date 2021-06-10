
var express= require('express');
var mongoclient = require('Mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectID;
var cors = require ('cors')
var body_parser = require('body-parser');

var app = express();
app.use(cors());
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
                msg:data
            })
        }
            else{
                res.send({
                    status:"failed",
                    msg:error
                
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
             msg:result
         })   
         
     }
         else{
             res.send({
                 status:"failed",
                 msg:error
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
                msg:data
            })
        }
            else{
                res.send({
                    status:"failed",
                    msg:error
                
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
             msg:result
         })   
         
     }
         else{
             res.send({
                 status:"failed",
                 msg:error
             })
         }
     
     })
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