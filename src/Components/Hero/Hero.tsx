import React from 'react';
import './Hero.css';
import Arch from '../../../public/Icons/Arch.tsx';

import BackgroundGradient from '../ui/BackgroundGradient/BackgroundGradient';

export default function Hero() {
  return (
    <section id="Home" className="flex-column flex-center">
      <BackgroundGradient />
      <div className="hero__container flex-column flex-center">
        <div className="image__container">
          <Arch strokeWidth="18" />
          <div>
            <img
              src="/Images/pictureOfMe.jpg"
              alt="Image of Taylor Kelley"
              className="image"
            />
          </div>
        </div>
        <h1 className="title__name">Taylor Kelley</h1>
        <h3 className="title__profession">{'<React Developer />'}</h3>
      </div>
    </section>
  );
}
