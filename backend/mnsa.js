
var express = require('express');
var mongoclient = require('Mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var cors = require('cors')
var body_parser = require('body-parser');
var path = require('path');

var upload = require('./multerConfig');




var app = express();
app.use(cors());
var connection;


app.get('/', (req, res) => {
    res.send({ msg: "hii" })
})

var Mongoobj = new mongoclient("mongodb+srv://mnsamart:mnsamart@cluster0.ykr9g.mongodb.net/mnsa?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });


var connection;
Mongoobj.connect((err, db) => {
    if (!err) {
        connection = db;
        console.log("database connected")
    }
    else {
        console.log("database could not connected sucessfully");
    }
})





app.get('/category', (req, res) => {
    var col = connection.db('mnsa').collection('category');
    col.find().toArray((error, data) => {
        if (!error) {
            res.send({
                status: "ok",
                msg: data
            })
        }
        else {
            res.send({
                status: "failed",
                msg: error

            })
        }

    })
})


app.post('/create_category', body_parser.json(), (req, res) => {
    console.log(req.body)
    var col = connection.db('mnsa').collection('category');
    col.insert(req.body, (error, result) => {
        if (!error) {
            res.send({
                status: "ok",
                msg: result
            })

        }
        else {
            res.send({
                status: "failed",
                msg: error
            })
        }

    })
})


app.get('/product', (req, res) => {
    var col = connection.db('mnsa').collection('product');
    col.find().toArray((error, data) => {
        if (!error) {
            res.send({
                status: "ok",
                msg: data
            })
        }
        else {
            res.send({
                status: "failed",
                msg: error

            })
        }

    })
})

app.post('/create_product', body_parser.json(), (req, res) => {
    console.log(req.body)
    var col = connection.db('mnsa').collection('product');
    col.insert(req.body, (error, result) => {
        if (!error) {
            res.send({
                status: "ok",
                msg: result
            })

        }
        else {
            res.send({
                status: "failed",
                msg: error
            })
        }

    })
})


// start multer




app.use(express.static(path.join(__dirname, 'uploads')));






app.post('/uploadfiles', body_parser.json(), (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log("Error Occured during upload ");
            console.log(err);
            res.send({ status: "failed", data: err });
        }
        else {


            var col = connection.db('mnsa').collection('product');

            console.log("files", req.files);
            console.log("line 47");
            console.log(req.body);

            var stdocs = {

               
                mainimage:req.files.mainimage[0].filename,

               
            }
            console.log(stdocs)

            var stdocssec ={ multipleimage: req.files.multipleimage.map(k => k.filename)
            }

            console.log(stdocssec)
            var product = { ...req.body, images: stdocs ,imagesec:stdocssec}


            col.insert(product, (error, result) => {
                if (!error) {
                    res.send({
                        status: "ok",
                        msg: result
                    })

                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }

            })



        }
    });
})


// end









app.post('/showproducts', body_parser.json(), (req, res) => {
  
   


            var col = connection.db('mnsa').collection('product');

            console.log("line 278");
            console.log(req.body);
    
         col.find(req.body).toArray((error,result)=>{ if (!error) {
                    res.send({
                        status: "ok",
                        msg: result
                    })

                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }
        })
          
          


        })








       app.post('/shopingcart1', body_parser.json(), (req, res) => {
            console.log(req.body)
            var col = connection.db('mnsa').collection('shopingcart');
            col.insert(req.body, (error, result) => {
                console.log(result)
                if (!error) {
                    console.log("292")
                    res.send({
                        status: "ok",
                        msg: result
                    })
        
                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }
        
            })
        })





        app.get('/delete-shopingcart1',(req, res) => {
            console.log(req.body)
            var col = connection.db('mnsa').collection('shopingcart');
            col.remove({_id:ObjectId(req.query.id)}, (error, result) => {
                if (!error) {
                    res.send({
                        status: "ok",
                        msg: result,
                        dlt:"dlt"
                    })
        
                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }
        
            })
        })




        app.post('/create_user', body_parser.json(), (req, res) => {
            console.log(req.body)
            var col = connection.db('mnsa').collection('user');
            col.insert(req.body, (error, result) => {
                if (!error) {
                    res.send({
                        status: "ok",
                        msg: result
                    })
        
                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }
        
            })
        })
        




        app.post('/login', body_parser.json(), (req, res) => {
  
   


            var col = connection.db('mnsa').collection('user');

            console.log("line 326");
            console.log(req.body);
    
         col.find({email:req.body.loginemail, password:req.body.loginpassword}).toArray((error,result)=>{ if (!error) {
                    res.send({
                        status: "ok",
                        msg: result
                    })

                }
                else {
                    res.send({
                        status: "failed",
                        msg: error
                    })
                }
        })
          
          


        })











app.listen(9000, () => {
    console.log("listening on port 9000")
})