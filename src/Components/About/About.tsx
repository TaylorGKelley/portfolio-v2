import React from 'react';
import './About.css';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaCss3Alt } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="About">
      <div className="skills__container">
        <div className="skills__carousel">
          <FaReact />
          <FaNodeJs />
          <BiLogoTypescript />
          <FaCss3Alt />
        </div>
      </div>
    </section>
  );
}
