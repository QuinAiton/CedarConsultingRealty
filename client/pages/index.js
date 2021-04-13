import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import chalk from 'chalk';
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

  return (
    <div className={styles.container}>
      <section>{isLoading ? <Map state={state} /> : <p>Loading</p>}</section>
      <section className={styles.map}>The Realty Cards</section>
    </div>
  );
};

export default index;
