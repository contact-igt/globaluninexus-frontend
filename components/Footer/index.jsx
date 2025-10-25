import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Global Agri Export</h3>
              <p className={styles.footerDescription}>
                Connecting India&apos;s finest agricultural produce with the world. Quality, trust, and excellence in every shipment.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <span className={styles.socialIcon}>f</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <span className={styles.socialIcon}>in</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <span className={styles.socialIcon}>tw</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <span className={styles.socialIcon}>yt</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Quick Links</h4>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>About Us</a></li>
                <li><a href="#" className={styles.footerLink}>Products</a></li>
                <li><a href="#" className={styles.footerLink}>Quality Standards</a></li>
                <li><a href="#" className={styles.footerLink}>Certifications</a></li>
                <li><a href="#" className={styles.footerLink}>Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Our Products</h4>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Fresh Fruits</a></li>
                <li><a href="#" className={styles.footerLink}>Vegetables</a></li>
                <li><a href="#" className={styles.footerLink}>Spices</a></li>
                <li><a href="#" className={styles.footerLink}>Rice & Millets</a></li>
                <li><a href="#" className={styles.footerLink}>Coconut Products</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Contact Info</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Mumbai, Maharashtra, India</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>contact@globaluninexus.com</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.certifications}>
          <h4 className={styles.certificationsTitle}>Our Certifications & Standards</h4>
          <div className={styles.certBadges}>
            <div className={styles.certBadge}>ISO 9001:2015</div>
            <div className={styles.certBadge}>FSSAI Certified</div>
            <div className={styles.certBadge}>APEDA Registered</div>
            <div className={styles.certBadge}>HACCP</div>
            <div className={styles.certBadge}>Global GAP</div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className={styles.copyright}>
                © 2025 Global Agri Export. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.footerBottomLinks}>
                <a href="#" className={styles.bottomLink}>Privacy Policy</a>
                <a href="#" className={styles.bottomLink}>Terms of Service</a>
                <a href="#" className={styles.bottomLink}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
