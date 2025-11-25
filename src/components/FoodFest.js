import React from 'react';
import { motion } from 'framer-motion';
import { FaPizzaSlice, FaMusic, FaHeart, FaLeaf } from 'react-icons/fa';
import './FoodFest.css';

const FoodFest = () => {
  const highlights = [
    { icon: <FaPizzaSlice />, label: 'Diverse Cuisines' },
    { icon: <FaMusic />, label: 'Music & Vibes' },
    { icon: <FaHeart />, label: 'Fun & Entertainment' },
    { icon: <FaLeaf />, label: 'Sustainable Food' },
  ];

  return (
    <section id="food-fest" className="food-fest">
      <div className="container">
        <h2 className="section-title">Food Fest</h2>
        <p className="section-subtitle">
          Relax, connect, and enjoy delicious food in a vibrant atmosphere
        </p>

        <motion.div
          className="food-fest-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Take a break from the hustle of competitions and projects and simply enjoy yourself! 
            The Food Fest is an entertainment zone hosted by SU Knowledge Hub Foundation, filled 
            with mouth-watering dishes, refreshing drinks, and a festive atmosphere for students, 
            participants, and visitors to relax, connect, and have fun.
          </p>
        </motion.div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <span className="highlight-label">{highlight.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="section-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUT2KdppegfKIssRL5UGN8O45hbhobG3sRzny_fyw0or8MrQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-large"
          >
            Register for Food Fest
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodFest;
