const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,  
  },
  nickname: {
    type: String,
    minlength: 3,
    required: true,
  },
  password: {
    type: String,
    minlength: 4,
    required: true,
  },
});

module.exports = mongoose.model("Users", UserSchema);