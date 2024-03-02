const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  healthcareProfessional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor' || 'Nurse',
    required: true,
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
  // Other relevant fields...
});

module.exports = mongoose.model('Chat', chatSchema);
