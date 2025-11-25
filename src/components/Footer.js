import React from 'react';
import { FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Organization Name */}
          <h2 className="footer-org-name">SU Knowledge Hub Foundation</h2>
          <p className="footer-tagline">Empowering Innovation, Inspiring Excellence</p>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3 className="contact-title">Contact Us</h3>
            <div className="contact-numbers">
              <a href="tel:+917396127941" className="contact-item">
                <FaPhone />
                <span>MD YOUSUF - 7396127941</span>
              </a>
              <a href="tel:+917661994324" className="contact-item">
                <FaPhone />
                <span>UZAIR - 7661994324</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} SU Knowledge Hub Foundation. All rights reserved.</p>
          <p className="footer-event">InnovateXpo 2025 • December 1, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
