var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../public/images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

exports.imgupload = (req,res) => {

}