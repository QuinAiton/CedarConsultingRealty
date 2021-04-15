// style imports
import styles from '../styles/listings.module.scss';
// module imports
import React from 'react';
const Listings = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} alt={'house'} />
      <div className={styles.body}>
        <div className={styles.info}>
          <span>{props.bedrooms} Bed</span>
          <span>{props.bathrooms} Bath</span>
          <span>{props.parking} Parking</span>
          <span className={styles.price}>${props.price}</span>
        </div>
        <div className={styles.address}>
          {props.street}, {props.country}
        </div>
      </div>
    </div>
  );
};

export default Listings;
