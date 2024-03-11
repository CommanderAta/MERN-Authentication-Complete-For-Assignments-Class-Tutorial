const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  medicalHistory: {
    type: String
  },
  // Other relevant fields...
});

module.exports = mongoose.model('Patient', patientSchema);
