const { catchAsyncError } = require('../middleware/catchAsyncError');
const ErrorHandler = require('../middleware/errorHandlers');
const userModel = require('../models/user-model');

module.exports.getMyProfile = catchAsyncError(async (req, res, next) => {
    const { decodedUser } = req.body;

    if (!decodedUser) {
        return next(new ErrorHandler("Application id not valid", 400));
    }

    const user = await userModel.findOne({ 
        username: decodedUser.username 
    });
    
    delete user.password;

    res.json({
        code: 200,
        message: 'Profile found',
        user: user,
    });
});