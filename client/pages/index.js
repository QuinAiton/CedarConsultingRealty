// Style Imports
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../styles/index.module.scss';
// module Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import chalk from 'chalk';
// Component Imports
import Map from '../components/Map';
import Listings from '../components/Listings';
const index = () => {
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const url = 'http://localhost:9000/listings';
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(chalk.red('Error fetching Data', err));
      });
  }, []);

  const listings = state.map((listing, index) => {
    return (
      <Listings
        key={index}
        image={listing.image}
        price={listing.price}
        street={listing.Street}
        city={listing.City}
        country={listing.country}
        parking={listing.parking_spaces}
        bathrooms={listing.number_of_bathrooms}
        bedrooms={listing.number_of_bedrooms}
        created={listing.created}
      />
    );
  });

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Map className={styles.map} state={state} />
      ) : (
        <p>Loading</p>
      )}
      <section className={styles.listings} state={state}>
        {listings}
      </section>
    </div>
  );
};

export default index;
