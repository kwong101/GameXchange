const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
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

  up_for_trade: {
    type: Boolean,
    required: true,
  },

  game_category: {
    type: String,
    required: true,
  },

  images: {
    type: Buffer,
    required: true,
  }

}, {
  timestamps: true,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;