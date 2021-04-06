import Map from '../components/map';
import styles from '../styles/Home.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      {process.env.NEXT_MAPBOX_TOKEN}
      <Map />
    </div>
  );
};

export default index;
