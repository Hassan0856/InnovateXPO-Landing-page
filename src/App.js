// src/App.js
import React, { useState, useCallback } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import SponsorsBar from './components/SponsorsBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProjectDomains from './components/ProjectDomains';
import SharkTank from './components/SharkTank';
import FoodFest from './components/FoodFest';
import Footer from './components/Footer';
import FullscreenPreloader from './components/FullscreenPreloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderDone = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <FullscreenPreloader
          src="/SUKHF_logo.png"
          durationMs={2800}
          onDone={handlePreloaderDone}
        />
      )}

      {/* Main site content - FIXED: SponsorsBar now comes BEFORE Hero */}
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 400ms ease-out',
          visibility: isLoading ? 'hidden' : 'visible'  // Added this to prevent interaction issues
        }}
      >
        <Navbar />
        <SponsorsBar />
        <Hero />
        <Categories />
        <ProjectDomains />
        <SharkTank />
        <FoodFest />
        <Footer />
      </div>
    </>
  );
}

export default App;
