const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type :String,
        required: [true, "Please add the user name"]
    },
    email : {
        type :String,
        required: [true, "Please enter the email"],
        unique : [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    },

},{
    timesstamps: true,
});

module.exports = mongoose.model("User", userSchema);