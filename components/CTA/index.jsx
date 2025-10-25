import React, { useState } from 'react';
import styles from './styles.module.css';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setShowForm(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContainer}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className={styles.ctaHeadline}>
                Partner with Us for Global Quality Agri-Exports
              </h2>
              <p className={styles.ctaSubtext}>
                Join hundreds of businesses worldwide who trust us for authentic, high-quality agricultural products directly from India&apos;s finest farms.
              </p>
              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span className={styles.badgeText}>ISO Certified</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span className={styles.badgeText}>Quality Assured</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✓</span>
                  <span className={styles.badgeText}>Timely Delivery</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.ctaButtons}>
                <button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={() => setShowForm(true)}
                >
                  Get in Touch
                </button>
                <button
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  onClick={() => setShowForm(true)}
                >
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className={styles.formOverlay} onClick={() => setShowForm(false)}>
            <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeButton}
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
              <h3 className={styles.formTitle}>Get in Touch</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </p>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
