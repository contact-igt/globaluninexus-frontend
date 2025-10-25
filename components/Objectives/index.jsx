import React from 'react';
import styles from './styles.module.css';

const Objectives = () => {
  const objectives = [
    {
      icon: '🥑',
      title: 'Source Quality Products',
      description: 'Guava, Lemon, Coconut, Chillies, Rice, Spices, Millets',
      color: '#4caf50',
    },
    {
      icon: '🌍',
      title: 'Deliver Global Standards',
      description: 'Ensure international safety, quality & packaging',
      color: '#ff9800',
    },
    {
      icon: '🌾',
      title: 'Promote Indian Agriculture',
      description: 'Support farmers & rural communities',
      color: '#2196f3',
    },
    {
      icon: '🤝',
      title: 'Build Sustainable Trade Relations',
      description: 'Transparent dealings & timely delivery',
      color: '#9c27b0',
    },
    {
      icon: '📈',
      title: 'Expand Global Presence',
      description: 'Enter new markets and diversify products',
      color: '#f44336',
    },
  ];

  return (
    <section className={styles.objectivesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Mission & Objectives</h2>
          <p className={styles.sectionSubtitle}>
            Committed to excellence, sustainability, and global agricultural trade
          </p>
        </div>

        <div className="row">
          {objectives.map((objective, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className={styles.objectiveCard}
                style={{ '--card-color': objective.color }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.iconCircle}>
                    <span className={styles.icon}>{objective.icon}</span>
                  </div>
                  <h3 className={styles.objectiveTitle}>{objective.title}</h3>
                  <p className={styles.objectiveDescription}>{objective.description}</p>
                  <div className={styles.cardOverlay}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.productsShowcase}>
          <h3 className={styles.showcaseTitle}>Our Premium Products</h3>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className={styles.productItem}>
                <img
                  src="/guava.jpg"
                  alt="Guava"
                  className={styles.productImage}
                />
                <p className={styles.productName}>Guava</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.productItem}>
                <img
                  src="coconut.jpg"
                  alt="Coconut"
                  className={styles.productImage}
                />
                <p className={styles.productName}>Coconut</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.productItem}>
                <img
                  src="lemon.avif"
                  alt="Lemon"
                  className={styles.productImage}
                />
                <p className={styles.productName}>Lemon</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.productItem}>
                <img
                  src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Spices"
                  className={styles.productImage}
                />
                <p className={styles.productName}>Spices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
