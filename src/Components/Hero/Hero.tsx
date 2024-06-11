import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero__container">
      <div className="image__container">
        <img src="" alt="Image of Taylor Kelley" className="image" />
      </div>
      <h1 className="title__name">Taylor Kelley</h1>
      <h3 className="title__profession">{'<React Developer />'}</h3>
    </div>
  );
}
