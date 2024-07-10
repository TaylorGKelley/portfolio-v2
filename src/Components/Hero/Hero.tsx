import React from 'react';
import './Hero.css';
import Arch from '../../../public/Icons/Arch.tsx';

import BackgroundGradient from '../ui/BackgroundGradient/BackgroundGradient';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFileArrowDown } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="Home" className="flex-row flex-center">
      <BackgroundGradient />
      <div className="hero__container">
        <div>
          <div className="hero__nav hero__icon-container">
            <a href="https://github.com/taylorgkelley" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-g-kelley"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="/Files/Resume.pdf" target="_blank">
              <FaFileArrowDown />
            </a>
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
          <nav className="hero__nav hero__nav-link-container">
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
        <h1 className="title__name font-serif">Taylor Kelley</h1>
        <h3 className="title__profession">{'<React Developer />'}</h3>
      </div>
    </section>
  );
}
