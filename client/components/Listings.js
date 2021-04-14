// style imports
import listings from '../styles/listings.module.css';
// module imports
import React from 'react';
const Listings = (props) => {
  return (
    <div className={listings.container}>
      <img className={listings.image} src={props.image} alt={'house'} />
      <div className={listings.body}>
        <div className={listings.info}></div>
        <div className={listings.address}>
          {props.street} | {props.city} | {props.country}
        </div>
      </div>
    </div>
  );
};

export default Listings;
