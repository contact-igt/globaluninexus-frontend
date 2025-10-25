import React from 'react';
import styles from './styles.module.css';

const OurEdge = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Direct Farmer Engagement',
      description: 'We work directly with farmers, eliminating middlemen and ensuring fair prices',
    },
    {
      number: '02',
      title: 'SOP-Driven Processes',
      description: 'Standardized procedures for harvesting, handling, and quality control',
    },
    {
      number: '03',
      title: 'Quality Inspection',
      description: 'Multi-stage inspection with third-party certifications',
    },
    {
      number: '04',
      title: 'Global Logistics',
      description: 'Efficient packaging and shipping to meet international standards',
    },
  ];

  return (
    <section className={styles.ourEdgeSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.contentWrapper}>
              <h2 className={styles.sectionTitle}>Our Edge: Direct Sourcing & SOP Excellence</h2>
              <p className={styles.sectionDescription}>
                We differentiate ourselves through direct engagement with farmers and strict adherence to Standard Operating Procedures (SOPs) at every stage of procurement and delivery.
              </p>
              <p className={styles.sectionDescription}>
                Our comprehensive approach ensures that every product meets international quality standards while supporting local farming communities and sustainable agricultural practices.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🌾</span>
                  <span className={styles.highlightText}>Farm-to-Export Traceability</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>📋</span>
                  <span className={styles.highlightText}>ISO Certified Processes</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🌍</span>
                  <span className={styles.highlightText}>Global Compliance</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.processFlow}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className={styles.stepConnector}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEdge;
