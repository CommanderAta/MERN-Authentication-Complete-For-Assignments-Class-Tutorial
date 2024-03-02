const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  healthcareProfessional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor' || 'Nurse',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  // Other relevant fields...
});

module.exports = mongoose.model('Schedule', scheduleSchema);
    