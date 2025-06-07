const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },     // Unique email address
  password: { type: String, required: true },                // Hashed password
  fullName: { type: String, required: true },               // User's full name
}, { timestamps: true });                                   // Adds createdAt and updatedAt automatically

module.exports = mongoose.model('User', userSchema);