import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaMoneyBillWave, FaHandshake, FaChartLine } from 'react-icons/fa';
import './SharkTank.css';

const SharkTank = () => {
  const benefits = [
    {
      icon: <FaBullseye />,
      title: 'Pitch Your Idea',
      description: 'Present your innovative business concept to industry leaders and experienced investors',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Funding Opportunities',
      description: 'Potential investment and funding for promising startups and innovative solutions',
    },
    {
      icon: <FaHandshake />,
      title: 'Expert Mentorship',
      description: 'Guidance from experienced entrepreneurs and investors to scale your business',
    },
    {
      icon: <FaChartLine />,
      title: 'Network Building',
      description: 'Connect with potential partners, investors, and like-minded entrepreneurs',
    },
  ];

  return (
    <section id="shark-tank" className="shark-tank">
      <div className="container">
        <h2 className="section-title">Shark Tank</h2>
        <p className="section-subtitle">
          Transform your vision into reality with expert guidance and potential funding
        </p>

        <motion.div
          className="shark-tank-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Got a game-changing idea? Pitch it to our panel of industry experts, investors, 
            and successful entrepreneurs! The Shark Tank event provides a platform for aspiring 
            entrepreneurs to present their innovative business ideas, receive valuable feedback, 
            and potentially secure funding or mentorship opportunities.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTRyzjzyoVPHuPpaYOocbKVXdo7V_zByEOWkO2wNGx16Qy9Q/viewform?pli=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-large"
          >
            Register for Shark Tank
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SharkTank;
