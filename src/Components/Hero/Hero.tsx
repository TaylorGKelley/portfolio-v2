import React from 'react';
import './Hero.css';
import Arch from '../../../public/Icons/Arch.tsx';

import BackgroundGradient from '../ui/BackgroundGradient/BackgroundGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hero() {
  return (
    <section id="Home" className="flex-row flex-center">
      <BackgroundGradient />
      <div className="hero__container">
        <div>
          <div className="hero__icon-container">
            <FontAwesomeIcon icon="github" />
          </div>
          <div className="image__container">
            <Arch strokeWidth="12" preserveAspectRatio="xMidYMin meet" />
            <div>
              <img
                src="/Images/PhotoOfTaylor.png"
                alt="Image of Taylor Kelley"
                className="image"
              />
            </div>
          </div>
          <nav className="hero__nav">
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">My Work</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="title__name">Taylor Kelley</h1>
        <h3 className="title__profession">{'<React Developer />'}</h3>
      </div>
    </section>
  );
}
