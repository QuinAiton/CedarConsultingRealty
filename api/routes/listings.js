const express = require('express');
const router = express.Router();
const Listing = require('../db/models/Listing');
const chalk = require('chalk');

/* Get data from Database*/
router.get('/', (req, res) => {
  Listing.find({})
    .then((listings) => {
      res.send(listings);
    })
    .catch((err) => {
      console.log(chalk.red('Error Fetching Listings', err));
    });
});

module.exports = router;
