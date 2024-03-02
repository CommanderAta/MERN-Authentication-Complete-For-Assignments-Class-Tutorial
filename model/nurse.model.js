const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  // Other relevant fields...
});

module.exports = mongoose.model('Nurse', nurseSchema);
