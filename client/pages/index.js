import Map from '../components/map';
import styles from '../styles/Home.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <section>
        <Map />
      </section>
      <section className={styles.map}>The Realty Cards</section>
    </div>
  );
};

export default index;
