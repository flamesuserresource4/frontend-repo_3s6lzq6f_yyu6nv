import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900 selection:bg-rose-200/60 selection:text-rose-900">
      <Hero />
      <Timeline />
      <Gallery />
      <FinalCTA />
      <MusicToggle />
    </div>
  );
}

export default App;
