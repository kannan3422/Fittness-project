const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    mail: String,
    DOB: String,
    Gender: String,
    Mobile: String,
    Height: String,
    Weight: String,
    Diet : String,
    Password: String,
    CPassword: String
});
module.exports.signup = mongoose.model("Signup",signupSchema);

