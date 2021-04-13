const mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  parking_spaces: {
    type: Number,
    required: true,
  },
  number_of_bathrooms: {
    type: Number,
    required: true,
  },
  number_of_bedrooms: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  Street: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  Sold: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Listing', listingsSchema);
