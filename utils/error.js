module.exports.error = (err, req, res, next)=>{

    if(err.name=="CastError"){
        err.message = "Cast Error: please give proper ID";
     err.statusCode = 400
    }

    if(err.name=="ReferenceError"){
        err.message = "Cast Error: please give proper ID";
     err.statusCode = 400
     console.log(err);
    }

    // check for err message & status code
     err.message = err.message ? err.message :"Internal Server Error";
     err.statusCode = err.statusCode ? err.statusCode : 500

     // send response
    res.status(err.statusCode).json({success:false, message:err.message})
}