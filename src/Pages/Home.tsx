import React from 'react';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
