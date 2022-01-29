const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  writerId: {
    type: Number,
    required: true,
  },
  postId: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Comments", CommentSchema);