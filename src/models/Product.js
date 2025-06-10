const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  performance: {
    type: Number,
    default: 0
  },
  revenue: {
    type: Number,
    default: 0
  },
  feedback: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);