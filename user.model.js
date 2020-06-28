const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
 
  password: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
  
});

var User = mongoose.model("User", userSchema, "users");

module.exports = User;
