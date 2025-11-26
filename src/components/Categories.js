import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHandshake} from 'react-icons/fa';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      icon: <FaRocket />,
      title: 'Project Expo',
      description: 'Showcase groundbreaking projects and innovative solutions across multiple domains. Experience the future of technology and innovation.',
      link: '#project-expo',
    },
    {
      icon: <FaHandshake />,
      title: 'Shark Tank',
      description: 'Pitch your innovative ideas to industry experts and investors. Transform your vision into reality with mentorship and funding opportunities.',
      link: '#shark-tank',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2 className="section-title">Event Categories</h2>
        <p className="section-subtitle">
          Three unique experiences designed to inspire, connect, and celebrate innovation
        </p>
        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href={category.link} className="category-link">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Move fade gradient BENEATH content for correct stacking */}
      <div className="categories-fade" aria-hidden="true"></div>
    </section>
  );  
};

export default Categories;
