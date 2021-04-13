const mongoose = required('mongoose');

const listingsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  parking_spaces: { type: Number, required: true },
  number_of_bathrooms: { type: Number, required: true },
  number_of_bedrooms: { type: Number, required: true },
  country: { type: String, required: true },
  Street: { type: String, required: true },
  City: { type: String, required: true },
  Sold: { boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Listing', listingsSchema);
