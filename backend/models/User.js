const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // To track when the document was created or updated
);

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
