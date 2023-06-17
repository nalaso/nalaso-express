const { catchAsyncError } = require('../middleware/catchAsyncError');
const ErrorHandler = require('../middleware/errorHandlers');
const userModel = require('../models/user-model');

module.exports.getAlluser = (req, res, next) => {
    userModel.find({}).then(users => {
        res.status(200).json({
            message: "All user",
            users: users
        })
    }).catch(error => {
        res.status(500).json({
            message: "Internal server error"
        })
    })
};

module.exports.getOneUserByUsername = catchAsyncError(async (req, res, next) => {
    const user = userModel.findOne({ 
        username: req.params.username 
    })
        
    if(!user){
        return next(new ErrorHandler("Failed to create user", 500));
    }

    res.status(200).json({
        message: "User found",
        user: user
    })
});

module.exports.deleteOneUserByUsername = catchAsyncError(async (req, res, next) => {
    const user = userModel.findOneAndDelete({ 
        username: req.params.username 
    })
        
    if(!user){
        return next(new ErrorHandler("Failed to create user", 500));
    }

    res.status(200).json({
        message: "User found",
        user: user
    })
});