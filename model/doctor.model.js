const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  // Other relevant fields...
});

module.exports = mongoose.model('Doctor', doctorSchema);
