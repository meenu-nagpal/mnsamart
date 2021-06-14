var MongoClient = require('mongodb').MongoClient;


var client = new MongoClient(" mongodb+srv://mnsamart:mnsamart@cluster0.ykr9g.mongodb.net/mnsa?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true});
var dbconfig= {
    dbcon:undefined
};
k
client.connect((err,db)=>{
        if(!err)
        {
            dbconfig.dbcon = db;
            console.log("database connected Successfully");
        }
        else{
            console.log("database could nt connect");
        }
})

module.exports = dbconfig;
