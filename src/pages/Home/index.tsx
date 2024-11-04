import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import SeperatorLine from '../../components/SeperatorLine';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <main className='bg-primary text-primary-900'>
      <Hero />
      <About />
      <SeperatorLine />
      <Projects />
      <SeperatorLine />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;
