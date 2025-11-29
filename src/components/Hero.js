import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <AnimatedBackground />
      
      <div className="hero-content">
        {/* Event Name */}
        <motion.div
          className="event-header"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="event-name">InnovateXpo</h1>
        </motion.div>

        {/* Organization Logos in Triangle Formation */}
        <motion.div
          className="org-collaboration-triangle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Top Logo */}
          <div className="triangle-top">
            <div className="org-logo">
              <img src="SUKHF_logo.png" alt="SU Knowledge Hub Foundation" />
            </div>
          </div>

          {/* Center X */}
          <div className="triangle-center">
            <span className="collaboration-x">×</span>
          </div>

          {/* Bottom Two Logos */}
          <div className="triangle-bottom">
            <div className="org-logo">
              <img src="birac_logo.png" alt="Birac" />
            </div>
            <div className="org-logo">
              <img src="MSME_logo.png" alt="MSME" />
            </div>
          </div>
        </motion.div>

        {/* Event Date Text */}
        <motion.p
          className="event-date-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          The bubble is going to burst on{' '}
          <span className="date-highlight">December 4</span>!
        </motion.p>

        {/* 50 Lakhs Highlight */}
        <motion.div
          className="hero-highlight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="highlight-wrapper">
            <span className="highlight-badge-text">Shortlisted startups get assistance to apply for funding upto</span>
            <h2 className="highlight-amount">
              <span className="amount-number">50</span>
              <span className="amount-text">LAKHS!</span>
            </h2>
          </div>
        </motion.div>

        {/* Birac Tagline */}
        <motion.p
          className="birac-tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          Per startup
        </motion.p>

        <motion.p
          className="hero-terms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          * Terms and conditions applied
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Innovation • Collaboration • Excellence
        </motion.p>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Experience a day of innovation, creativity, entertainment, and 
          entrepreneurial spirit. Discover visionary ideas, inspiring talent, 
          and cross-disciplinary collaborations across technology, business, and culture.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
