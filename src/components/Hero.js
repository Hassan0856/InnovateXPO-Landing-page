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

        {/* Event Date Text */}
        <motion.p
          className="event-date-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          The bubble is going to burst on{' '}
          <span className="date-highlight">December 1</span>!
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
