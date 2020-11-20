const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    text: true,
  },

  description: {
    type: String,
    required: true,
    minlength: 3,
    text: true,
  },

  owner: {
    type: String,
    required: true,
    text: true,
  },

  condition: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
    text: true
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
    text: true
  },

  listingId: {
    type: String
  }

}, {
  timestamps: true,
});



const Listing = mongoose.model('Listing', listingSchema);



module.exports = Listing;