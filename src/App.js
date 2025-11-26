import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SponsorsBar from './components/SponsorsBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProjectDomains from './components/ProjectDomains';
import SharkTank from './components/SharkTank';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SponsorsBar />
      <Hero />
      <Categories />
      <ProjectDomains />
      <SharkTank />
      <Footer />
    </div>
  );
}

export default App;
