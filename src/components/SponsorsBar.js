import React from 'react';
import { motion } from 'framer-motion';
import './SponsorsBar.css';

const SponsorsBar = () => {
  const sponsors = [
    { name: 'MJCET', logo: 'MJCET_logo.png' },
    { name: 'SUCL', logo: 'sultan_uloom_law_logo.png' },
    { name: 'SUCP', logo: 'sultan_uloom_pharmacy_logo.png' },
    { name: 'GACBA', logo: 'Ghulam_Ahmed_logo.png' },
    { name: 'SUES', logo: 'SUES_logo.png' },
  ];

  return (
    <div className="sponsors-bar">
      <div className="sponsors-container">
        <div className="sponsors-logos">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="sponsor-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsBar;
