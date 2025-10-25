import React, { useState } from 'react';
import styles from './styles.module.css';

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: 'Verified Sourcing',
      description: 'Direct from certified farmers & producers',
      details: 'We work directly with certified farmers and agricultural cooperatives across India, ensuring complete transparency and traceability from farm to export.',
      icon: '✓',
    },
    {
      title: 'Quality Control',
      description: 'Multi-stage inspection & third-party verification',
      details: 'Every product undergoes rigorous multi-stage quality checks and third-party certifications to meet international food safety standards.',
      icon: '⚡',
    },
    {
      title: 'Competitive Pricing',
      description: 'Efficient logistics + best prices without compromising quality',
      details: 'Our streamlined supply chain and direct sourcing model eliminate middlemen, allowing us to offer competitive pricing while maintaining premium quality.',
      icon: '💰',
    },
  ];

  return (
    <section className={styles.whyUsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <p className={styles.sectionSubtitle}>
            Trusted by global businesses for quality, reliability, and excellence
          </p>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className={`${styles.featureCard} ${activeTab === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveTab(index)}
              >
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.featureDetails}>
                  <p>{feature.details}</p>
                </div>
                <div className={styles.cardGlow}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <div className={styles.statBox}>
                <h3 className={styles.statNumber}>500+</h3>
                <p className={styles.statLabel}>Verified Farmers</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.statBox}>
                <h3 className={styles.statNumber}>25+</h3>
                <p className={styles.statLabel}>Countries Served</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.statBox}>
                <h3 className={styles.statNumber}>100%</h3>
                <p className={styles.statLabel}>Quality Assured</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles.statBox}>
                <h3 className={styles.statNumber}>10K+</h3>
                <p className={styles.statLabel}>Tons Exported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
