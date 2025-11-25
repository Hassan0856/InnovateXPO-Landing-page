import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaLightbulb, FaCity, FaSeedling, FaTimes } from 'react-icons/fa';
import Modal from './Modal';
import './ProjectDomains.css';

const ProjectDomains = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const domains = [
    {
      icon: <FaHeartbeat />, // Medical/health icon
      title: 'MedTech',
      shortDesc: 'Innovative healthcare technologies improving patient care and medical practices',
      fullDesc: 'Revolutionary medical technologies and healthcare innovations transforming patient care, diagnostics, and treatment. Discover AI-powered diagnostics, telemedicine platforms, wearable health devices, medical imaging solutions, and digital health records that make healthcare more accessible, accurate, and personalized for patients and providers.',
      features: [
        'AI-Powered Diagnostics & Analysis',
        'Telemedicine & Remote Patient Monitoring',
        'Wearable Health Devices & IoT',
        'Medical Imaging & Digital Health Records',
      ],
      color: '#10b981', // Green for healthcare
    },
    {
      icon: <FaLightbulb />,
      title: 'Open Innovation',
      shortDesc: 'Collaborative platforms fostering global cooperation and innovation',
      fullDesc: 'Collaborative innovation platforms and open-source solutions that break down barriers and foster global cooperation. Explore crowdsourcing platforms, open-source software, collaborative research tools, and innovation ecosystems that enable knowledge sharing and collective problem-solving.',
      features: [
        'Crowdsourcing & Collaboration Platforms',
        'Open Source Solutions',
        'Innovation Ecosystems',
        'Knowledge Sharing Networks',
      ],
      color: '#8b5cf6',
    },
    {
      icon: <FaCity />,
      title: 'Urban Tech & Smart Cities',
      shortDesc: 'Technologies creating sustainable and efficient urban environments',
      fullDesc: 'Technologies that make cities smarter, more sustainable, and more livable. Experience IoT solutions, smart transportation systems, energy management platforms, waste management innovations, and urban planning tools that create sustainable and efficient urban environments.',
      features: [
        'IoT & Sensor Networks',
        'Smart Transportation Systems',
        'Energy & Resource Management',
        'Sustainable Urban Planning',
      ],
      color: '#10b981',
    },
    {
      icon: <FaSeedling />,
      title: 'Agriculture & Food Tech',
      shortDesc: 'Innovative solutions for sustainable agriculture and food security',
      fullDesc: 'Innovative solutions for sustainable agriculture and food production. Discover precision farming technologies, vertical farming systems, food processing innovations, supply chain optimization, and sustainable agricultural practices that address global food security challenges.',
      features: [
        'Precision Agriculture & IoT',
        'Vertical & Hydroponic Farming',
        'Food Processing & Preservation',
        'Supply Chain & Traceability',
      ],
      color: '#f59e0b',
    },
  ];

  return (
    <section id="project-expo" className="project-domains">
      <div className="container">
        <h2 className="section-title">Project Expo Domains</h2>
        <p className="section-subtitle">
          Explore innovative projects across four cutting-edge domains
        </p>

        <div className="domains-grid">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="domain-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedDomain(domain)}
              style={{ '--domain-color': domain.color }}
            >
              <div className="domain-icon">{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.shortDesc}</p>
              <button className="domain-learn-more">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Domain Details */}
      <AnimatePresence>
        {selectedDomain && (
          <Modal onClose={() => setSelectedDomain(null)}>
            <div className="domain-modal-content">
              <button className="modal-close" onClick={() => setSelectedDomain(null)}>
                <FaTimes />
              </button>
              
              <div className="modal-header">
                <div className="modal-icon" style={{ color: selectedDomain.color }}>
                  {selectedDomain.icon}
                </div>
                <h2>{selectedDomain.title}</h2>
              </div>

              <p className="modal-description">{selectedDomain.fullDesc}</p>

              <div className="modal-features">
                <h3>Key Focus Areas</h3>
                <ul>
                  {selectedDomain.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-cta">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdTRyzjzyoVPHuPpaYOocbKVXdo7V_zByEOWkO2wNGx16Qy9Q/viewform?pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ background: selectedDomain.color }}
                >
                  Register for This Domain
                </a>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDomains;
