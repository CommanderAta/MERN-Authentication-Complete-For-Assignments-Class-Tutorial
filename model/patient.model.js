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
    // This could be a complex nested object or a reference to another model
  },
  // Other relevant fields...
});

module.exports = mongoose.model('Patient', patientSchema);
