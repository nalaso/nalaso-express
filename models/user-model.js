const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a unique emp_id"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    createdAt: {
        localString:{
            type: String,
            required:true
        },
        timestamp:{
            type: Number,
            required:true
        }
    },
});

module.exports = mongoose.model('User', UserSchema);