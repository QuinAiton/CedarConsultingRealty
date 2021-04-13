const Listing = require('../models/Listing');
const mongoose = require('mongoose');
const chalk = require('chalk');
const listingData = [
  {
    image:
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 600566,
    parking_spaces: 2,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.10932, 49.265323],
    },
    Street: 'West 6th Ave',
    City: 'Vancouver',
  },
];

const newListing = new Listing(listingData[0]);
Listing.create(newListing)
  .then(() => {
    console.log(chalk.green('inserted Listing'));
  })
  .catch((err) => {
    console.log(chalk.red('Error adding Listing', err));
  });
