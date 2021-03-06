var path = require('path');
var multer  =  require('multer');


var storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
                        cb(null, 'uploads')
                    },
        filename: function (req, file, cb) {
                    var ext = path.extname(file.originalname);
                    
                    
                    

                    cb(null, file.fieldname.slice(0,3) + '-' + Date.now()+"."+ext);
                }
  }

//   resume-234763458969876.jpg
  
  )

  
  var multerOptions = { storage: storage,
                        fileFilter: function(req,file,callback){
                                        var ext = path.extname(file.originalname);
                                        var fieldName = file.fieldname;

                                        if(fieldName=="mainimage")
                                        {
                                            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                                                return callback(new Error('Only images are allowed for main image'));
                                            }
                                            callback(null, true);
                                        }
                                        if(fieldName=="multipleimage")
                                        {
                                            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                                                return callback(new Error('Only images are allowed for multiple image'));
                                            }
                                            callback(null, true);
                                        }
                               
                                    } 
                      }
   
  var upload = multer(multerOptions).fields([{name:"mainimage",maxCount:1},{name:"multipleimage",maxCount:4}]);


  module.exports=upload;