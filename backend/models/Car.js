const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
  model: { type: String, required: true },
  mark: { type: String, required: true },
  year: { type: String, required: true },
  doors: { type: String, required: true },
  air: { type: String, required: true },
  transmission: { type: String, required: true },
  fuel: { type: String, required: true }
});

module.exports = mongoose.model('Car', carSchema);