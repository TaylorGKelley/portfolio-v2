import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="Home">
      <div className="hero__container flex-column flex-center">
        <div className="image__container">
          <img
            src="/Images/pictureOfMe.jpg"
            alt="Image of Taylor Kelley"
            className="image"
          />
        </div>
        <h1 className="title__name">Taylor Kelley</h1>
        <h3 className="title__profession">{'<React Developer />'}</h3>
      </div>
      <div>
        <div className="hero__scroll-icon"></div>
      </div>
    </section>
  );
}
