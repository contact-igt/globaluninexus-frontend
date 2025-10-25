import React from 'react';
import styles from './styles.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeadline}>
                Connecting India&apos;s Finest Agricultural Produce with the World
              </h1>
              <p className={styles.heroSubtext}>
                Fresh, authentic, and globally certified products delivered directly from our trusted farmers to your business.
              </p>
              <div className={styles.heroButtons}>
                <button className={`${styles.btnPrimary} ${styles.btn}`}>
                  Request a Quote
                </button>
                <button className={`${styles.btnSecondary} ${styles.btn}`}>
                  Explore Products
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.heroImageWrapper}>
              <img
                src="https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fresh Agricultural Produce"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div> */}
    </section>
  );
};

export default Hero;
