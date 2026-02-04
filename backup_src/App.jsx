import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FeaturePromo from './components/FeaturePromo';
import ValueCards from './components/ValueCards';
import FeaturedImages from './components/FeaturedImages';
import SystemUniqueness from './components/SystemUniqueness';
import WhyDosteon from './components/WhyDosteon';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <FeaturePromo />
        <ValueCards />
        <FeaturedImages />
        <SystemUniqueness />
        <WhyDosteon />
        <Impact />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
