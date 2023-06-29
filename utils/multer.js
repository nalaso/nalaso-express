const multer = require('multer');

module.exports.uploadFile = (fileId,loc="./public/general/") => multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            if(req?.query?.location){
                cb(null, `./public/${req.query.location}/`)
            }else{
                cb(null, loc)
            }
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "." + (ext = file.originalname.split(".").pop()))
        }
    })
}).single(fileId);