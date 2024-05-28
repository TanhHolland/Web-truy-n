const mongoose = require("mongoose");

// Define the Mongoose Schema for a Comment.
const commentSchema = new mongoose.Schema({
  // The text of the comment.
  comment: String,
  // The date and time when the comment was created.
  date_time: { type: Date, default: Date.now },
  // The ID of the user who created the comment.
  user_name: String,
});

// Create a Mongoose Model for a Comment using the commentSchema.
const Comment = mongoose.model("Comment", commentSchema);

// Make this available to our application.
module.exports = Comment;