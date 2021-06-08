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
  
  )

  
  var multerOptions = { storage: storage,
                        fileFilter: function(req,file,callback){
                                        var ext = path.extname(file.originalname);
                                        var fieldName = file.fieldname;

                                        if(fieldName=="profile")
                                        {
                                            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                                                return callback(new Error('Only images are allowed for profile'));
                                            }
                                            callback(null, true);
                                        }
                                        if(fieldName=="resume")
                                        {
                                            if( ext !== '.pdf') {
                                                return callback(new Error('Only word file and pdf are allowed for resume'));
                                            }
                                            callback(null, true);
                                        }
                                        if(fieldName=="certificates")
                                        {
                                            if(ext !== '.pdf') {
                                                return callback(new Error('Only word file, pdf, jpg and jpeg are allowed for certificates'));
                                            }
                                            callback(null, true);
                                        }
                                        
                                    } 
                      }
   
  var upload = multer(multerOptions).fields([{name:"profile", maxCount:1},{name:"resume",maxCount:1},{name:"certificates",maxCount:5}]);


  module.exports=upload;