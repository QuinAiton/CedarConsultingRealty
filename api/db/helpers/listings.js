const faker = require('faker');
const fs = require('fs');

// created random number from 1 to num
const getRandomMax = (num) => {
  return Math.ceil(Math.random() * Math.floor(num));
};

const listingSeed = () => {
  let listings = [];
  let x = 0;
  while (x < 20) {
    const listing = {
      title: 'title',
      description: 'desc',
      image: 'image',
      price: 0,
      parking_spaces: getRandomMax(4),
      number_of_bathrooms: getRandomMax(4),
      number_of_bedrooms: getRandomMax(7),
      longitude: 0,
      latitude: 0,
      country: 'Canada',
      street: 'street',
      city: 'Vancouver',
      province: 'British Columbia',
    };

    const queryString = `INSERT INTO listings(title,description,image,price,parking_spaces,number_of_bathrooms,number_of_bedrooms,longitude,latitude,country,street,city,province)VALUES('${listing.title}','${listing.description}', '${listing.image}', ${listing.price}, ${listing.parking_spaces}, ${listing.number_of_bedrooms},${listing.longitude}, ${listing.latitude}, '${listing.country}', '${listing.street}','${listing.city}','${listing.province}');`;

    listings.push(queryString);
    x++;
  }
  return listings;
};

fs.writeFileSync('db/seeds/listingSeed.sql', listingSeed());
