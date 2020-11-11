const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },

  description: {
    type: String,
    required: true,
    minlength: 3,
  },

  owner: {
    type: String,
    required: true,
  },

  condition: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  images: {
    type: Buffer,
    required: true,
  }

  // needa delete images here lmao

}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;