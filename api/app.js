// load .env data into process.env
require('dotenv').config();

// Web server modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const chalk = require('chalk');

const Listing = require('./db/models/Listing');

// Route Imports
const indexRouter = require('./routes/index');
const listingsRouter = require('./routes/listings');

// App Initializer
const app = express();

// Database Config
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(chalk.green('Your Database is Connected')))
  .catch((err) => {
    console.log(chalk.red('Error', err.message));
  });

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
      coordinates: [-123.151797, 49.264762],
    },
    Street: '2053 W 8th Ave, Vancouver, BC V6J 1W4',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 110000000,
    parking_spaces: 2,
    number_of_bathrooms: 2,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.13635, 49.344038],
    },
    Street: '705 Southborough Dr, West Vancouver, BC V7S 1M9',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 967987,
    parking_spaces: 4,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.14351, 49.336897],
    },
    Street: 'West Vancouver, British Columbia V7T 2A1',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 1200345,
    parking_spaces: 2,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.137559, 49.345062],
    },
    Street: '770-716 Eyremount Dr, West Vancouver, BC V7S 2A4',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 6456000,
    parking_spaces: 4,
    number_of_bathrooms: 5,
    number_of_bedrooms: 7,
    country: 'Canada',
    location: {
      coordinates: [-123.162653, 49.327879],
    },
    Street: 'West Vancouver, British Columbia V7V 1A8',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 4567900,
    parking_spaces: 3,
    number_of_bathrooms: 4,
    number_of_bedrooms: 6,
    country: 'Canada',
    location: {
      coordinates: [-123.168799, 49.328032],
    },
    Street: '2135 Argyle Ave, West Vancouver, BC V7V 1A5',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 897566,
    parking_spaces: 3,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.165347, 49.265895],
    },
    Street: 'West Side, Vancouver, BC V6K 1W7',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 1100566,
    parking_spaces: 4,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.164163, 49.273281],
    },
    Street: 'Point Grey Rd, Vancouver, BC V6K 1A4',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 687566,
    parking_spaces: 1,
    number_of_bathrooms: 2,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-123.11679, 49.275075],
    },
    Street: '1267 Marinaside Crescent, Vancouver, BC V6Z 2X5',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/6510428/pexels-photo-6510428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 900566,
    parking_spaces: 1,
    number_of_bathrooms: 2,
    number_of_bedrooms: 2,
    country: 'Canada',
    location: {
      coordinates: [-123.126205, 49.281619],
    },
    Street: '1028 Barclay St, Vancouver, BC V6E 0B1',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.pexels.com/photos/6438743/pexels-photo-6438743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 700566,
    parking_spaces: 2,
    number_of_bathrooms: 2,
    number_of_bedrooms: 2,
    country: 'Canada',
    location: {
      coordinates: [-123.124791, 49.286211],
    },
    Street: '655-699 Burrard St, Vancouver, BC',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmFuY291dmVyJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 1300566,
    parking_spaces: 3,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-122.970466, 49.26191],
    },
    Street: '6457 Lougheed Hwy, Burnaby, BC V5B 3A1',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHRvd25ob3VzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 1400566,
    parking_spaces: 2,
    number_of_bathrooms: 3,
    number_of_bedrooms: 4,
    country: 'Canada',
    location: {
      coordinates: [-122.973732, 49.269556],
    },
    Street: '6263 Grant St, Burnaby, BC V5B 2K7',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 1200566,
    parking_spaces: 2,
    number_of_bathrooms: 3,
    number_of_bedrooms: 5,
    country: 'Canada',
    location: {
      coordinates: [-123.189308, 49.238654],
    },
    Street: 'Dunbar-Southlands, Vancouver, BC',
    City: 'Vancouver',
  },
  {
    image:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dG93bmhvdXNlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 117566,
    parking_spaces: 0,
    number_of_bathrooms: 2,
    number_of_bedrooms: 3,
    country: 'Canada',
    location: {
      coordinates: [-123.10932, 49.265323],
    },
    Street: '6051 Charles St, Burnaby, BC V5B 2G7',
    City: 'Vancouver',
  },
];

listingData.forEach((item) => {
  const newListing = new Listing(item);
  Listing.create(newListing)
    .then(() => {
      console.log(chalk.green('inserted Listing'));
    })
    .catch((err) => {
      console.log(chalk.red('Error adding Listing', err));
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/listings', listingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
